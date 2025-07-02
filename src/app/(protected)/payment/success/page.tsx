import OrderConfirmed from '@/component_library/order_confirmed/orderConfirmed'
import { Box } from '@mui/material'
import React from 'react'

const Page = () => {
    return (
        <Box display={'grid'} width={'100vw'} height={'100dvh'} sx={{ placeContent: 'center', textAlign: 'center' }}>
            <OrderConfirmed />
        </Box>
    )
}

export default Page