import ProductCollections from '@/component_library/poroduct_collections/productCollections'
import { Box } from '@mui/material'
import React from 'react'

async function Page({ params }: { params: Promise<{ q: string }> }) {
    let { q } = await params
    q = decodeURIComponent(q.trim())
    return (
        <Box display={'flex'} height={{
            md: '85dvh',
            xs: '100%'
        }} overflow={{
            md: 'hidden',
            xs: 'scroll'
        }} gap={5}>
            <ProductCollections q={q} />
        </Box>
    )
}

export default Page
