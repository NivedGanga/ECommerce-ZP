import { CheckoutModel } from "@/core_components/models/checkoutModel/checkoutModel"
import { useCheckout } from "@/core_components/services/checkout_service/useCheckout"
import { checkoutItemKey } from "@/core_components/utils/constants/constants"
import { useState } from "react"
import { toast } from "react-toastify/unstyled"

export const useOrderSuccess = () => {
    const { checkoutOrder } = useCheckout()

    const [success, setSuccess] = useState<string | null>(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const finalizeCheckout = () => {
        setLoading(true)
        const value = sessionStorage.getItem(checkoutItemKey)
        if (!value) {
            setError(true)
            toast.error("checkout not completed")
            setLoading(false)
        }
        sessionStorage.removeItem(checkoutItemKey)
        const checkoutModel: CheckoutModel = JSON.parse(value!)
        checkoutOrder(checkoutModel, () => {

            setSuccess('Success')
            setLoading(false)
        }, () => {
            setError(true)
            toast.error("Checkout not completed")
            setLoading(false)
        })
    }

    return {
        finalizeCheckout,
        error,
        success,
        loading
    }
}