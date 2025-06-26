import FiltersFab from '@/component_library/filters_fab/filtersFab'
import ProductContent from '@/component_library/product_content/productContent'
import SideBar from '@/component_library/side_bar/sideBar'
import { Box, Typography } from '@mui/material'
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
            <SideBar />
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
                    <ProductContent />
                </Box>
            </Box>
            <FiltersFab />
        </Box>
    )
}

export default Page
