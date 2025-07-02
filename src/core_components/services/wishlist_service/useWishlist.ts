import { ProductModel } from "@/core_components/models/product_model/productModel"
import { dataCollection, wishListCollection } from "@/core_components/utils/constants/constants"
import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore"
import { firestoreDb } from "../../../../firebase.config"
import { useSelector } from "react-redux"
import { IRootState } from "@/core_components/redux/store"
import { CurrentUser } from "@/core_components/models/currentUser/currentUser"

export const useWishlist = () => {
    const user = useSelector((state: IRootState) => state.auth.user)

    const addItemToWishList = async (product: ProductModel, onSuccess: () => void, onError: (error: string) => void) => {
        
        await setDoc(doc(firestoreDb, dataCollection, user!.uid, wishListCollection, product.pid.toString()), product)
            .then(() =>
                onSuccess()
            )
            .catch(onError)
    }

    const getWishlistItems = async (onSuccess: (items: ProductModel[]) => void, onError: (error: string) => void, currentUser?: CurrentUser) => {
        try {
            const wishlistRef = collection(firestoreDb, dataCollection, currentUser ? currentUser!.uid : user!.uid, wishListCollection)
            const snapshot = await getDocs(wishlistRef)
            const items: ProductModel[] = []
            snapshot.forEach((doc) => {
                items.push(doc.data() as ProductModel)
            })
            console.log(items)
            onSuccess(items)
        } catch (error) {
            onError(error as string)
        }
    }
    const removeItemFromWishlist = async (productId: string, onSuccess: () => void, onError: (error: string) => void) => {
        await deleteDoc(doc(firestoreDb, dataCollection, user!.uid, wishListCollection, productId))
            .then(() =>
                onSuccess()
            )
            .catch(onError)
    }

    return {
        addItemToWishList,
        removeItemFromWishlist,
        getWishlistItems
    }
}