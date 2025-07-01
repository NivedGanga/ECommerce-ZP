'use client'
import ItemShowCard from '@/shared_features/display_elements/item_show_card/itemShowCard'
import { Box, Stack } from '@mui/material'
import React, { useState } from 'react'

export default function ProductShow({ images }: { images: Array<string> }) {
    const [imageIndex, setimageIndex] = useState<number>(0)
    return (
        <Box display={'flex'} padding={4} gap={{
            md: 4,
            xs: 1
        }}>
            <ItemShowCard
                aspectRatio={0.95}
                width={{
                    md: '22rem',
                    xs: '17rem'
                }}
                src={images[imageIndex]}
            />
            <Stack height={{
                xs: '45dvh',
                md: 'content-fit'
            }} overflow={'hidden auto'} padding={0} gap={1}>
                {
                    images.map((image, i) => (
                        <Box
                            border={i == imageIndex ? 1 : 0}
                            key={i}>
                            <ItemShowCard

                                onClick={() => {
                                    setimageIndex(i)
                                }}
                                height='100px'
                                aspectRatio={0.9}
                                width='4.5rem'
                                src={image}
                            />
                        </Box>
                    ))
                }
            </Stack>
        </Box>
    )
}
