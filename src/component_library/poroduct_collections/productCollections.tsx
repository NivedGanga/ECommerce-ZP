'use client'
import React, { useEffect } from 'react'
import ProductContent from '@/component_library/product_content/productContent'
import SideBar from '@/component_library/side_bar/sideBar'
import { Box, Typography } from '@mui/material'
import FiltersFab from '../filters_fab/filtersFab'
import { useProductContent } from '../product_content/useProductContent'

const ProductCollections = ({ q }: { q?: string }) => {
    const { loading, fetchProductContents, products, facet, handleFacetSelection, clearFacets, applyFilters, facetsSelected } = useProductContent()
    useEffect(() => {
        fetchProductContents(q)
    }, [])

    return (
        <>
            <SideBar
                facetsSelected={facetsSelected}
                q={q}
                loading={loading}
                applyFilters={applyFilters}
                clearFacets={clearFacets} handleFacetSelection={handleFacetSelection} facet={facet} />
            <Box overflow={{
                md: 'hidden auto',
                xs: 'hidden'
            }} height={'100%'} flex={1}>
                <Box>
                    <Typography sx={{ color: 'gray', textWrap: 'nowrap', width: '100%', fontSize: '13px' }}>
                        Home <Typography component={'span'} sx={{ color: 'black', textWrap: 'nowrap' }}>/&nbsp;Products</Typography>
                    </Typography>
                    <Typography fontSize={'larger'} fontWeight={'600'} sx={{ textTransform: 'uppercase', marginTop: 1 }}>
                        Products
                    </Typography>
                    <ProductContent loading={loading} products={products} />
                </Box>
            </Box>
            <FiltersFab facetsSelected={facetsSelected}
                q={q}
                applyFilters={applyFilters}
                clearFacets={clearFacets} handleFacetSelection={handleFacetSelection} facet={facet} />
        </>
    )
}

export default ProductCollections