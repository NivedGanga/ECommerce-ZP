'use client'
import ItemShowCard from '@/shared_features/display_elements/item_show_card/itemShowCard'
import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useLandingGallery } from './useLandingGallery'
import GalleryLoading from './loading/galleryLoading'
import { noImageUrl } from '@/core_components/utils/constants/constants'

function LandingGallery() {
    const { fetchGallery, products, loading } = useLandingGallery()
    useEffect(() => {
        fetchGallery()
    }, [])

    return (
        <Box display={'flex'} width={'100%'} flexDirection={'row'} gap={{
            md: 4,
            xs: 1
        }} flex={2}>
            {
                loading ? <GalleryLoading /> : products.slice(0, 2).map((v, k) => (
                    <ItemShowCard key={k} flex={1} src={v.image!} pid={v.pid} />
                ))
            }
            {
                !loading && products.length == 0 && Array(2).fill(0).map((v, k) => (
                    <ItemShowCard key={k} flex={1} src={noImageUrl} pid={k} />
                ))
            }
        </Box>
    )
}

export default LandingGallery
