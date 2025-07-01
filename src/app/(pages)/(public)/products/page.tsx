import ProductCollections from '@/component_library/poroduct_collections/productCollections'
import { Box } from '@mui/material'
import React from 'react'

function Page() {
    return (
        <Box display={'flex'} height={{
            md: '85dvh',
            xs: '100%'
        }} overflow={{
            md: 'hidden',
            xs: 'scroll'
        }} gap={5}>
            <ProductCollections/>
        </Box>
    )
}

export default Page
