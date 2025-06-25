import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'

interface Props {
    flex?: number,
    src: string,
    width?: string,
    aspectRatio?: number
    height?: string
}

function ItemShowCard(props: Props) {
    const { flex, src, width = '100%', aspectRatio = 0.99, } = props

    return (
        <Box
            width={`${width}`}
            border={1} borderColor={'#0000002f'} sx={{
                aspectRatio: aspectRatio,
                position: 'relative',
            }} flex={flex}>
            <Image
                fill
                style={{ objectFit: 'cover' }}
                src={src}
                alt=''
            />
        </Box>
    )
}

export default ItemShowCard
