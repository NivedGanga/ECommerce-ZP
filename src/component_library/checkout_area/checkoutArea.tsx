'use client'
import React from 'react'
import CheckoutTabs from '@/component_library/checkout_tabs/checkoutTabs'
import { Box, Stack } from '@mui/material'
import FinalizedOrdersummary from '../finalized_order_summary/finalizedOrdersummary'
import { useSelector } from 'react-redux'
import { IRootState } from '@/core_components/redux/store'

const CheckoutArea = () => {
    const cartState = useSelector((state: IRootState) => state.cart)
    return (
        <Stack sx={{
            gap: {
                lg: '300px',
                md: '100px',
                xs: '50px'
            },
            flexDirection: {
                md: 'row',
                xs: 'column'
            },
            alignItems: {
                xs: 'center',
                md: 'start'
            },
            marginBottom: {
                xs: 5,
                md: 0
            }
        }}>
            <Box flex={2}>
                <CheckoutTabs />
            </Box>
            <FinalizedOrdersummary cartItems={cartState.cartItems} total={cartState.total} />
        </Stack>
    )
}

export default CheckoutArea