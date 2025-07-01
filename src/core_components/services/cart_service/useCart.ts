import { CartModel } from "@/core_components/models/cartModel/cartModel"
import { ProductModel } from "@/core_components/models/product_model/productModel"
import { firestoreDb } from "../../../../firebase.config"
import { collection, getDocs, setDoc, doc, deleteDoc } from "firebase/firestore"
import { cartCollection, dataCollection } from "@/core_components/utils/constants/constants"
import { useSelector } from "react-redux"
import { IRootState } from "@/core_components/redux/store"
import { CurrentUser } from "@/core_components/models/currentUser/currentUser"

export const useCart = () => {
    const user = useSelector((state: IRootState) => state.auth.user)
    const addItemToCart = async (product: ProductModel, onSuccess: () => void, onError: (error: string) => void, size: 'xs' | 's' | 'm' | 'l' | 'xl', quantity?: number) => {
        const cartItem: CartModel = {
            product: product,
            quantity: quantity ?? 1,
            size: size
        }
        await setDoc(doc(firestoreDb, dataCollection, user!.uid, cartCollection, product.pid.toString()), cartItem)
            .then(() =>
                onSuccess()
            )
            .catch(onError)
    }

    const getCartItems = async (onSuccess: (cartitems: Array<CartModel>) => void, onError: (error: string) => void, currentUser?: CurrentUser) => {
        await getDocs(collection(firestoreDb, dataCollection, currentUser ? currentUser!.uid : user!.uid, cartCollection))
            .then((querySnapshot) => {
                const cartItems: Array<CartModel> = []
                querySnapshot.forEach((doc) => {
                    cartItems.push(doc.data() as CartModel)
                })
                onSuccess(cartItems)
            })
            .catch((error) => onError(error.message))
    }

    const updateCartItemCount = async (cartItem: CartModel, quantity: number, onSuccess: (updatedCartItem: CartModel) => void, onError: (error: string) => void) => {
        const cartItemRef = doc(firestoreDb, dataCollection, user!.uid, cartCollection, cartItem.product.pid.toString())
        await setDoc(cartItemRef, { quantity }, { merge: true })
            .then(() => {
                const updatedItem: CartModel = {
                    ...cartItem,
                    quantity: quantity
                }
                onSuccess(updatedItem)
            })
            .catch((error) => onError(error.message))
    }
    const removeCartItem = async (cartItem: CartModel, onSuccess: () => void, onError: (error: string) => void) => {
        const cartItemRef = doc(firestoreDb, dataCollection, user!.uid, cartCollection, cartItem.product.pid.toString())
        await deleteDoc(cartItemRef)
            .then(() => onSuccess())
            .catch((error) => onError(error.message))
    }

    const removeAllFromCart = async (onSuccess: () => void, onError: (error: string) => void) => {
        await getDocs(collection(firestoreDb, dataCollection, user!.uid, cartCollection))
            .then(async (cartSnapshot) => {
                const deletePromises = cartSnapshot.docs.map(doc => deleteDoc(doc.ref))
                await Promise.all(deletePromises)
                onSuccess()
            })
            .catch((error) => onError(error.toString()))
    }

    return {
        addItemToCart,
        getCartItems,
        updateCartItemCount,
        removeCartItem,
        removeAllFromCart
    }
}