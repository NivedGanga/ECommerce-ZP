
import CheckoutArea from '@/component_library/checkout_area/checkoutArea'
import BackButton from '@/shared_features/display_elements/back_button/backButton'
import { Typography } from '@mui/material'
import React from 'react'

export default function page() {
    return (
        <>
            <BackButton customRoute='/cart' />
            <Typography sx={{ textTransform: 'uppercase', fontSize: '23px', fontWeight: '600', marginTop: '1rem' }}>
                Checkout
            </Typography>
            <CheckoutArea />
        </>
    )
}
