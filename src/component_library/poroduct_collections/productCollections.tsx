'use client'
import React, { useEffect } from 'react'
import ProductContent from '@/component_library/product_content/productContent'
import SideBar from '@/component_library/side_bar/sideBar'
import { Box, Typography } from '@mui/material'
import FiltersFab from '../filters_fab/filtersFab'
import { useProductContent } from '../product_content/useProductContent'

const ProductCollections = ({ q }: { q?: string }) => {
    const { loading, fetchProductContents, products, facet, page, handleFacetSelection, clearFacets, applyFilters, facetsSelected, hasChanges, changePage, selectedFacets } = useProductContent()
    useEffect(() => {
        fetchProductContents(q)
    }, [])

    useEffect(() => {
        if (page == null) return;
        applyFilters(q)
    }, [page])

    return (
        <>
            <SideBar
                facetsSelected={facetsSelected}
                hasChanges={hasChanges}
                q={q}
                loading={loading}
                applyFilters={applyFilters}
                clearFacets={clearFacets}
                handleFacetSelection={handleFacetSelection}
                facet={facet}
                selectedFacets={selectedFacets} />
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
                    <ProductContent page={page} changePage={changePage} loading={loading} products={products} />
                </Box>
            </Box>
            <FiltersFab facetsSelected={facetsSelected}
                hasChanges={hasChanges}
                q={q}
                applyFilters={applyFilters}
                clearFacets={clearFacets}
                handleFacetSelection={handleFacetSelection}
                facet={facet}
                selectedFacets={selectedFacets} />
        </>
    )
}

export default ProductCollections