'use client'
import { IRootState } from '@/core_components/redux/store'
import CapitalizedText from '@/shared_features/display_elements/capitalized_text/capitalizedText'
import StyledButton from '@/shared_features/display_elements/styled_button/styledButton'
import { Box, Divider, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux'

const OrderSummary = () => {
    const cartState = useSelector((state: IRootState) => state.cart)
    const router = useRouter()
    return (
        <>{
            cartState.cartItems.length > 0 && <Box border={1}
                overflow={'auto'}
                width={{
                    xs: '100%'
                }} padding={5} height={'fit-content'} flex={2}>
                <CapitalizedText>
                    Order Summary
                </CapitalizedText>
                <Stack marginTop={3} gap={1}>
                    {
                        cartState.cartItems.map((cartItem, k) => (
                            <Box key={k} display={'flex'} gap={1} justifyContent={'space-between'}>
                                <Typography sx={{ fontSize: '14px' }}>
                                    {cartItem.product.name}
                                </Typography>
                                <Typography sx={{ fontSize: '14px', textWrap: 'nowrap' }}>
                                    {cartItem.product.currentPrice}x {cartItem.quantity}
                                </Typography>
                            </Box>
                        ))
                    }
                </Stack>
                <Divider sx={{ margin: '10px 0', borderColor: 'gray' }} />
                <Box display={'flex'} marginBottom={3} justifyContent={'space-between'}>
                    <CapitalizedText>
                        Total
                    </CapitalizedText>
                    <Typography>
                        {
                            cartState.total
                        }
                    </Typography>
                </Box>
                <StyledButton
                    onClick={() => router.push('/checkout')}
                    variant='contained'>
                    Continue
                </StyledButton>
            </Box>
        }
        </>

    )
}

export default OrderSummary