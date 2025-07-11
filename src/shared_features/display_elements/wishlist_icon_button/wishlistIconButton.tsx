import { useWishlistItems } from '@/component_library/wishlist_items/useWishlistItems'
import { ProductModel } from '@/core_components/models/product_model/productModel'
import { IRootState } from '@/core_components/redux/store'
import { Favorite, FavoriteBorderOutlined } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

interface Props {
    product: ProductModel,
    position?: 'relative' | 'absolute',
    positionProps?: {
        bottom?: number | string,
        top?: number | string,
        left?: number | string,
        right?: number | string
    },
    bgColor?: string
}

function WishlistIconButton(props: Props) {
    const { position = 'absolute', positionProps = { bottom: '1px', left: undefined, right: 0, top: undefined }, bgColor, product } = props
    const { addItem, removeItem } = useWishlistItems()
    const [checked, setChecked] = useState(false)
    const currentUser = useSelector((state: IRootState) => state.auth.user)
    const router = useRouter()

    const handleClick = () => {
        if (!currentUser) {
            router.push('/login')
            return;
        }
        if (!checked && !product.inWishlist) {
            addItem(product)
            setChecked(true)
        } else {
            setChecked(false)
            removeItem(product)
        }
    }

    return (
        <Button variant='contained'
            onClick={() => handleClick()}
            sx={{
                bottom: positionProps.bottom,
                left: positionProps.left,
                right: positionProps.right,
                top: positionProps.top,
                margin: 'auto',
                bgcolor: `${bgColor ? bgColor : '#00000000'}`,
                minWidth: '40px',
                width: '40px',
                position: position,
                '&:hover': {
                    transform: 'scale(1.1)'
                }
            }} disableElevation >
            {
                checked || product.inWishlist ? <Favorite data-testid='wishlist-added-icon' sx={{ transform: 'rotate(-30deg)' }} color='error' /> :
                    <FavoriteBorderOutlined data-testid='wishlist-not-added-icon' sx={{ transform: 'rotate(-30deg)' }} color='disabled' />
            }
        </Button>
    )
}

export default WishlistIconButton
