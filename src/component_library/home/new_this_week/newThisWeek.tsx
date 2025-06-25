import CarouselSection from '@/component_library/carousel/carouselSection'
import MainHeadings from '@/shared_features/display_elements/main_headings/mainHeadings'
import { Box } from '@mui/material'
import React from 'react'


function NewThisWeek() {

    return (
        <Box sx={{ margin: '10rem 0' }}>
            <MainHeadings>
                New <br /> This week
            </MainHeadings>
            <CarouselSection />
        </Box>

    )
}

export default NewThisWeek
