import LoadingItemCard from '@/shared_features/display_elements/item_card/loading/loadingItemCard'
import { Box } from '@mui/material'
import React from 'react'

const GalleryLoading = () => {
    return (
        <Box display={'flex'} width={'100%'} height={{
            lg: '400px',
            sm: '300px',
            xs:'150px'
        }} alignItems={'flex-end'} flexDirection={'row'} gap={{
            md: 4,
            xs: 1
        }} flex={2}>
            <LoadingItemCard sx={{ height: '100%', flex: 1 }} />
            <LoadingItemCard sx={{ height: '100%', flex: 1 }} />
        </Box>
    )
}

export default GalleryLoading