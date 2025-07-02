import { CheckoutModel } from "@/core_components/models/checkoutModel/checkoutModel"
import { useCheckout } from "@/core_components/services/checkout_service/useCheckout"
import { useState } from "react"
import { toast } from "react-toastify/unstyled"

export const useDetailedOrder = () => {
    const [loading, setLoading] = useState(false)
    const [detailedOrder, setDetailedOrder] = useState<CheckoutModel | null>(null)
    const { fetchOrderById } = useCheckout()
    const getDetailedOrder = (orderid: string) => {
        setLoading(true)
        fetchOrderById(orderid, (order) => {
            setDetailedOrder(order)
            setLoading(false)
        }, (error) => {
            toast.error(error)
            setLoading(false)
        }
        )
    }
    return {
        getDetailedOrder,
        detailedOrder,
        loading
    }
}