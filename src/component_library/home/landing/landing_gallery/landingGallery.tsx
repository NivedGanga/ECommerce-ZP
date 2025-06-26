import ItemShowCard from '@/shared_features/display_elements/item_show_card/itemShowCard'
import { Box } from '@mui/material'
import React from 'react'


function LandingGallery() {
    return (
        <Box display={'flex'} width={'100%'} flexDirection={'row'} gap={{
            md: 4,
            xs: 1
        }} flex={2}>
            <ItemShowCard flex={1} src='https://shop.mango.com/assets/rcs/pics/static/T8/fotos/S/87090415_99.jpg?imwidth=2048&imdensity=1&ts=1732115075823' />
            <ItemShowCard flex={1} src='https://styleunion.in/cdn/shop/files/SMCS00108CHARCOAL_1_9988da7b-2730-4847-8c1b-e38ee498ab41.jpg?v=1740662896&width=1200' />
        </Box>
    )
}

export default LandingGallery
