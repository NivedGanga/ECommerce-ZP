
import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import CartItems from '@/component_library/cart_items/cartItems'
import OrderSummary from '@/component_library/order_summary/orderSummary'
const page = () => {
    return (
        <Box display={'flex'} flexDirection={{
            xs: 'column',
            md: 'row'
        }} maxHeight={{
            md: '85dvh',
        }} alignItems={'center'} overflow={'hidden'} gap={5} paddingBottom={{
            xs: 20,
            md: 0
        }}>
            <Box height={{
                md: '85dvh',
            }} overflow={'auto'} flex={9}>
                <Box overflow={'auto'} paddingTop={6} paddingRight={{
                    md: 3
                }}>
                    <Typography>
                        Shopping bag
                    </Typography>
                    <Divider sx={{ margin: '10px 0px' }} />
                    <CartItems />
                </Box>
            </Box>
            <OrderSummary />
        </Box>
    )
}

export default page