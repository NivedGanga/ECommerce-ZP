import { CheckoutModel } from "@/core_components/models/checkoutModel/checkoutModel"
import { useCheckout } from "@/core_components/services/checkout_service/useCheckout"
import { useState } from "react"
import { toast } from "react-toastify/unstyled"

export const useOrdersList = () => {
    const { fetchCheckoutOrders } = useCheckout()
    const [loading, setLoading] = useState(false)
    const [orders, setOrders] = useState<Array<CheckoutModel>>([])
    const getAllOrders = () => {
        setLoading(true)
        fetchCheckoutOrders((orders) => {
            setOrders(orders)
            setLoading(false)
        }, (error) => {
            toast.error(error)
            setLoading(false)
        })
    }
    return {
        getAllOrders,
        orders,
        loading
    }
}