import { Box, Card, CardActionArea, CardContent, SxProps, Typography } from '@mui/material'
import React from 'react'
import ItemShowCard from '../item_show_card/itemShowCard'
import WishlistIconButton from '../wishlist_icon_button/wishlistIconButton'
import AddToCartButton from '../add_to_cart_button/addToCartButton'

interface Props {
    image: string
    category: string,
    name: string,
    price: number,
    width?: string,
    sx?: SxProps,
    isAddToCartButtonVisible?: boolean,
    wishlistPositionProps?: {
        bottom?: number | string;
        top?: number | string;
        left?: number | string;
        right?: number | string;
    }
    wishlistButtonBgColor?: string
}

function ItemCard(props: Props) {
    const { image, category, name, price, width, sx, wishlistPositionProps, wishlistButtonBgColor, isAddToCartButtonVisible = false } = props

    return (
        <Card elevation={0} sx={{ bgcolor: 'transparent', ...sx }}>
            <Box position={'relative'} width={width}>
                <ItemShowCard width={width} src={image} />
                {
                    isAddToCartButtonVisible ?
                        <AddToCartButton productId='' isIconButton /> :
                        <WishlistIconButton bgColor={wishlistButtonBgColor} positionProps={wishlistPositionProps} productId='1' />
                }

            </Box>
            <CardActionArea>
                <CardContent sx={{ padding: '10px 0 0 0' }}>
                    <Typography sx={{ color: '#000000af', fontWeight: '300' }}>
                        {category}
                    </Typography>
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography sx={{ fontWeight: '500' }}>
                            {name}
                        </Typography>
                        <Typography>
                            ${price}
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ItemCard
