import { CheckoutModel } from "@/core_components/models/checkoutModel/checkoutModel"
import { firestoreDb } from "../../../../firebase.config"
import { collection, addDoc } from "firebase/firestore"
import { dataCollection, ordersCollection } from "@/core_components/utils/constants/constants"
import { useSelector } from "react-redux"
import { IRootState } from "@/core_components/redux/store"
import { useCart } from "../cart_service/useCart"

export const useCheckout = () => {
    const user = useSelector((state: IRootState) => state.auth.user)
    const { removeAllFromCart } = useCart()
    const checkoutOrder = async (checkoutModel: CheckoutModel, onSuccess: () => void, onError: (error: string) => void) => {
        if (!user) {
            onError("User not authenticated")
            return
        }
        try {
            await addDoc(collection(firestoreDb, dataCollection, user.uid, ordersCollection), {
                ...checkoutModel,
                userId: user.uid,
                timestamp: Date.now()
            })
            removeAllFromCart(() => {
                onSuccess()
            }, (error) => {
                onError(error)
            })
        } catch (error) {
            onError(error instanceof Error ? error.message : "Failed to save order")
        }
    }
    const fetchCheckoutOrders = async (onSuccess: (orders: CheckoutModel[]) => void, onError: (error: string) => void) => {
        if (!user) {
            onError("User not authenticated")
            return
        }
        try {
            const { getDocs, query, orderBy } = await import("firebase/firestore")
            const ordersRef = collection(firestoreDb, dataCollection, user.uid, ordersCollection)
            const ordersQuery = query(ordersRef, orderBy("timestamp", "desc"))
            const querySnapshot = await getDocs(ordersQuery)
            const orders = querySnapshot.docs.map(doc => ({
                docId: doc.id,
                ...doc.data()
            } as CheckoutModel & { id: string }))
            console.log(orders)
            onSuccess(orders)
        } catch (error) {
            onError(error instanceof Error ? error.message : "Failed to fetch orders")
        }
    }

    const fetchOrderById = async (docId: string, onSuccess: (order: CheckoutModel) => void, onError: (error: string) => void) => {
        if (!user) {
            onError("User not authenticated")
            return
        }
        try {
            const { doc, getDoc } = await import("firebase/firestore")
            const orderRef = doc(firestoreDb, dataCollection, user.uid, ordersCollection, docId)
            const docSnapshot = await getDoc(orderRef)
            
            if (docSnapshot.exists()) {
                const order = {
                    docId: docSnapshot.id,
                    ...docSnapshot.data()
                } as CheckoutModel & { docId: string }
                onSuccess(order)
            } else {
                onError("Order not found")
            }
        } catch (error) {
            onError(error instanceof Error ? error.message : "Failed to fetch order")
        }
    }
    return {
        checkoutOrder,
        fetchCheckoutOrders,
        fetchOrderById
    }
}