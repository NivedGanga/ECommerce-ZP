import ItemCard from '@/shared_features/display_elements/item_card/itemCard'
import { Grid } from '@mui/material'
import React from 'react'

const WishlistItems = () => {
    return (
        <Grid container columnSpacing={3} rowSpacing={5}>
            {
                Array(20).fill(0).map((v, k) => (
                    <Grid key={k} size={3} rowGap={4} columnGap={2}>
                        <ItemCard category='nothing'
                            image='https://www.jiomart.com/images/product/original/rvf1r63wzz/women-trouser-casual-pants-for-women-pista-color-product-images-rvf1r63wzz-3-202305041718.jpg?im=Resize=(500,630)'
                            name='something'
                            price={90} isAddToCartButtonVisible />
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default WishlistItems