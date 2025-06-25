
import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import CartItems from '@/component_library/cart_items/cartItems'
import OrderSummary from '@/component_library/order_summary/orderSummary'
const page = () => {
    return (
        <Box display={'flex'} maxHeight={'85vh'} alignItems={'center'} overflow={'hidden'} gap={5}>
            <Box height={'85vh'} overflow={'auto'} flex={9}>
                <Box overflow={'auto'} paddingTop={6} paddingRight={3}>
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