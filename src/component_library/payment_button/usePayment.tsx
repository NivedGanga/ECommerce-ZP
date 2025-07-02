import { CheckoutModel } from "@/core_components/models/checkoutModel/checkoutModel"
import { usePaymentService } from "@/core_components/services/payment_service/usePaymentService"
import { useState } from "react"
import { toast } from "react-toastify/unstyled"

import { loadStripe } from '@stripe/stripe-js';
import { checkoutItemKey } from "@/core_components/utils/constants/constants";

export const usePayment = () => {
    const [loading, setLoading] = useState(false)
    const { makePaymentService } = usePaymentService()
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

    const makePayment = async (checkoutModel: CheckoutModel) => {
        setLoading(true)
        const amount = checkoutModel.total
        makePaymentService(
            JSON.stringify({ amount })
            , async (sessionId) => {
                sessionStorage.setItem(checkoutItemKey, JSON.stringify(checkoutModel))
                const stripe = await stripePromise;
                stripe?.redirectToCheckout({ sessionId: sessionId });
                setLoading(false)
            }, (error) => {
                toast.error(error)
                setLoading(false)
            })
    }
    
    return {
        loading,
        makePayment
    }
}