import { Box, Chip, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import ItemCard from '../item_card/itemCard'
import CountSetter from '../count_setter/countSetter'
import {  RemoveCircleOutlineOutlined } from '@mui/icons-material'

interface Props {
    title: string,
    color?: string
}

function CartItemCard(props: Props) {
    const { color = 'black' } = props
    return (
        <Box display={'flex'} alignItems={'center'}>
            <ItemCard
                name='name'
                image='https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/463981/sub/goods_463981_sub14_3x4.jpg?width=494'
                price={90}
                category='child'
                sx={{ flex: 1 }}
                wishlistPositionProps={{ right: '1px', bottom: '1px' }}
                wishlistButtonBgColor='transparent'
            />
            <Stack gap={2} alignItems={'center'} padding={2}>
                <Typography>L</Typography>
                <Chip
                    aria-label='color'
                    sx={{
                        bgcolor: `${color}`,
                        width: '28px',
                        height: '28px',
                        borderRadius: 0
                    }}
                />
                <CountSetter />
                <IconButton>
                    <RemoveCircleOutlineOutlined />
                </IconButton>
            </Stack>
        </Box>
    )
}

export default CartItemCard
