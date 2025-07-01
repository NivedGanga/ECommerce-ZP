'use client'
import CarouselSection from '@/component_library/carousel/carouselSection'
import MainHeadings from '@/shared_features/display_elements/main_headings/mainHeadings'
import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useNewThisWeek } from './useNewThisWeek'
import LoadingNewThisWeek from './loading/loadingNewThisWeek'


function NewThisWeekComponent() {
    const { fetchNewThisWeek, products, loading } = useNewThisWeek()
    useEffect(() => {
        fetchNewThisWeek()
    }, [])
    return (
        <Box sx={{ margin: '10rem 0' }}>
            <MainHeadings>
                New <br /> This week
            </MainHeadings>
            {
                loading ? <LoadingNewThisWeek /> : products.length > 0 ? <CarouselSection products={products} /> : ''
            }
        </Box>
    )
}

export default NewThisWeekComponent
