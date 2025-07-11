'use client'
import { IRootState } from '@/core_components/redux/store'
import ItemCard from '@/shared_features/display_elements/item_card/itemCard'
import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import emptyWishlist from '../../../public/assets/images/empty_wiahlist.png'
import Column from '@/shared_features/display_elements/column/column'
const WishlistItems = () => {
    const wishlist = useSelector((state: IRootState) => state.wishlist.wishlistItems)
    return (
        <>{
            wishlist.length == 0 ? <Grid
                sx={{
                    placeContent: 'center',
                    height:'60dvh'
                }}
                container>
                <Column stackProps={{ alignItems: 'center' }}>
                    <Image
                        src={emptyWishlist}
                        width={300}
                        style={{
                            mixBlendMode: 'darken'
                        }}
                        alt='empty-wishlist'
                    />
                    <Typography color='textDisabled'>
                        No items in wishlist
                    </Typography>
                </Column>
            </Grid> :
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
        }

        </>

    )
}

export default WishlistItems