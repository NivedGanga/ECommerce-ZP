
import { ProductModel } from '@/core_components/models/product_model/productModel'
import ItemCard from '@/shared_features/display_elements/item_card/itemCard'
import SearchBar from '@/shared_features/input_elements/search_bar/searchBar'
import { Box, Grid, Stack } from '@mui/material'
import React from 'react'
import LoadingProductContent from './loading/loadingProductContent'
import StyledButton from '@/shared_features/display_elements/styled_button/styledButton'
import { productsItemCount } from '@/core_components/utils/constants/constants'

function ProductContent(
    { loading, products, changePage, page }:
        { loading: boolean, products: Array<ProductModel>, changePage: (option: "prev" | "next") => void, page: number | null }) {

    return (
        <Box>
            <SearchBar width={400} />
            {
                loading ? <LoadingProductContent /> :
                    <Grid container marginTop={5} paddingBottom={5} columnSpacing={{
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
            <Stack direction={'row'} margin={'0 20px'} gap={2}>
                <StyledButton isEnabled={(page ?? 0) > 0}
                    onClick={() => changePage('prev')}
                >Prev</StyledButton>
                <StyledButton
                    isEnabled={products.length == productsItemCount}
                    onClick={() => changePage('next')}>Next</StyledButton>
            </Stack>
        </Box>
    )
}

export default ProductContent
