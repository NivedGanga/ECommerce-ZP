'use client'
import { IRootState } from '@/core_components/redux/store'
import ItemCard from '@/shared_features/display_elements/item_card/itemCard'
import { Grid } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const WishlistItems = () => {
    const wishlist = useSelector((state: IRootState) => state.wishlist.wishlistItems)
    return (
        <Grid container columnSpacing={3} rowSpacing={5}>
            {
                wishlist.map((item, k) => (
                    <Grid key={k} size={{
                        lg: 3,
                        xs: 6,
                        md: 4,
                    }} rowGap={{
                        md: 4,
                        xs: 2
                    }} columnGap={{
                        md: 2,
                        xs: 1
                    }}>
                        <ItemCard product={{ ...item, inWishlist: true }} />
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default WishlistItems