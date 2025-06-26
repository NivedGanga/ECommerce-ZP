import React from 'react'
import CheckoutTabs from '@/component_library/checkout_tabs/checkoutTabs'
import { Box, Stack } from '@mui/material'
import FinalizedOrdersummary from '../finalized_order_summary/finalizedOrdersummary'

const CheckoutArea = () => {
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
            alignItems: 'center',
            marginBottom: {
                xs: 5,
                md: 0
            }
        }}>
            <Box flex={2}>
                <CheckoutTabs />
            </Box>
            <FinalizedOrdersummary />
        </Stack>
    )
}

export default CheckoutArea