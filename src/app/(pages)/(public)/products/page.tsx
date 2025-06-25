import ProductContent from '@/component_library/product_content/productContent'
import { Box, Typography } from '@mui/material'
import React from 'react'

function Page() {
    return (
        <Box>
            <Typography sx={{ color: 'gray', textWrap: 'nowrap', width: '100%', fontSize: '13px' }}>
                Home <Typography component={'span'} sx={{ color: 'black', textWrap: 'nowrap' }}>/&nbsp;Products</Typography>
            </Typography>
            <Typography fontSize={'larger'} fontWeight={'600'} sx={{ textTransform: 'uppercase', marginTop: 1 }}>
                Products
            </Typography>
            <ProductContent />
        </Box>
    )
}

export default Page
