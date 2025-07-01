
import { ProductModel } from '@/core_components/models/product_model/productModel'
import ItemCard from '@/shared_features/display_elements/item_card/itemCard'
import SearchBar from '@/shared_features/input_elements/search_bar/searchBar'
import { Box, Grid } from '@mui/material'
import React from 'react'
import LoadingProductContent from './loading/loadingProductContent'

function ProductContent(
    { loading, products }:
        { loading: boolean, products: Array<ProductModel> }) {

    return (
        <Box>
            <SearchBar width={400} />
            {
                loading ? <LoadingProductContent /> :
                    <Grid container marginTop={5} paddingBottom={10} columnSpacing={{
                    md: 3,
                    xs: 1
                }} rowSpacing={4} >
                    {
                        products.map((product, k) => (
                            <Grid key={k} size={{
                                lg: 3,
                                xs: 6,
                                sm: 4
                            }}>
                                <ItemCard product={product} />
                            </Grid>
                        ))
                    }
                </Grid>
            }

        </Box>
    )
}

export default ProductContent
