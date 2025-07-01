'use client'
import { Box, Card, CardActionArea, CardContent, SxProps, Typography } from '@mui/material'
import React from 'react'
import ItemShowCard from '../item_show_card/itemShowCard'
import WishlistIconButton from '../wishlist_icon_button/wishlistIconButton'
import { ProductModel } from '@/core_components/models/product_model/productModel'
import { useRouter } from 'next/navigation'

interface Props {
    product: ProductModel
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
    const { product, width, sx, wishlistPositionProps, wishlistButtonBgColor } = props
    const router = useRouter()

    return (
        <Card elevation={0} sx={{ bgcolor: 'transparent', ...sx }}>
            <Box position={'relative'} width={width}>
                <ItemShowCard width={width} pid={product.pid} src={product.image ?? 'https://thumb.ac-illust.com/b1/b170870007dfa419295d949814474ab2_t.jpeg'} />
                <WishlistIconButton bgColor={wishlistButtonBgColor} positionProps={wishlistPositionProps} product={product} />
            </Box>
            <CardActionArea
                onClick={() => {
                    router.push(`/view/${product.pid}`)
                }}
            >
                <CardContent sx={{ padding: '10px 0 0 0' }}>
                    <Typography sx={{ color: '#000000af', fontWeight: '300' }}>
                        {product.brandName}
                    </Typography>
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography sx={{ fontWeight: '500' }}>
                            {product.name}
                        </Typography>
                        <Typography>
                            ${product.currentPrice}
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ItemCard
