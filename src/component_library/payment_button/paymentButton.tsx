'use client'
import { CheckoutModel } from '@/core_components/models/checkoutModel/checkoutModel'
import StyledButton from '@/shared_features/display_elements/styled_button/styledButton'
import React from 'react'
import { usePayment } from './usePayment';

interface Props {
    checkoutModel: CheckoutModel
}
console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

function PaymentButton(props: Props) {
    const { checkoutModel } = props
    const { makePayment } = usePayment()
    const handleClick = async () => {
        makePayment(checkoutModel)
    };
    return (
        <StyledButton onClick={handleClick}>
            Pay ${checkoutModel.total}
        </StyledButton>
    )
}

export default PaymentButton
