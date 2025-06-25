import ItemCard from '@/shared_features/display_elements/item_card/itemCard'
import SearchBar from '@/shared_features/input_elements/search_bar/searchBar'
import { Box, Grid } from '@mui/material'
import React from 'react'

function ProductContent() {
    return (
        <Box marginRight={5}>
            <SearchBar width={400} />
            <Grid container marginTop={5} paddingBottom={3} spacing={3}>
                {
                    Array(10).fill('0').map((v, k) => (
                        <Grid key={k} size={4}>
                            <ItemCard category='shirt'
                                image='https://image.hm.com/assets/hm/70/06/7006e71e95a2f1d848b6f96366fd75ac2d031d38.jpg?imwidth=2160'
                                name='polo' price={20} />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default ProductContent
