import { Box, Chip, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import ItemCard from '../item_card/itemCard'
import CountSetter from '../count_setter/countSetter'
import { RemoveCircleOutlineOutlined } from '@mui/icons-material'
import { CartModel } from '@/core_components/models/cartModel/cartModel'
import { useCartItems } from '@/component_library/cart_items/useCartItems'

const blinkingAnimation = {
    '@keyframes blink': {
        '0%': { opacity: 1 },
        '50%': { opacity: 0.3 },
        '100%': { opacity: 1 }
    }
}

interface Props {
    cartItem: CartModel
    color?: string
    loading?: boolean
}

function CartItemCard(props: Props) {
    const { color = 'black', cartItem, loading = false } = props
    const { changeQuantity, removeItem } = useCartItems()
    return (
        <Box
            display={'flex'}
            alignItems={'center'}
            sx={{
                ...blinkingAnimation,
                ...(loading && {
                    animation: 'blink 2s infinite ease-in-out'
                })
            }}
        >
            <ItemCard
                product={cartItem.product}
                sx={{ flex: 1 }}
                wishlistPositionProps={{ right: '1px', bottom: '1px' }}
                wishlistButtonBgColor='transparent'
            />
            <Stack gap={2} alignItems={'center'} padding={2} paddingRight={{
                xs: 0,
                md: 2
            }}>
                <Typography>{cartItem.size.toUpperCase()}</Typography>
                <Chip
                    aria-label='color'
                    sx={{
                        bgcolor: `${color}`,
                        width: '28px',
                        height: '28px',
                        borderRadius: 0
                    }}
                />
                <CountSetter
                    onIncrment={(q) => {
                        changeQuantity(cartItem, q)
                    }}
                    onDecrement={(q) => {
                        changeQuantity(cartItem, q)
                    }}
                    inititalCount={cartItem.quantity} />
                <IconButton onClick={() => removeItem(cartItem)}>
                    <RemoveCircleOutlineOutlined />
                </IconButton>
            </Stack>
        </Box >
    )
}

export default CartItemCard
