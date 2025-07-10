'use client'
import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { ResponsiveStyleValue, Theme } from '@mui/system'
import { Property } from 'csstype'
import { useRouter } from 'next/navigation'

interface Props {
    flex?: number,
    src: string,
    width?: ResponsiveStyleValue<Property.Width<string | number> | readonly NonNullable<Property.Width<string | number> | undefined>[] | undefined> | ((theme: Theme) => ResponsiveStyleValue<Property.Width<string | number> | readonly NonNullable<Property.Width<string | number> | undefined>[] | undefined>),
    aspectRatio?: number
    height?: string,
    pid?: number,
    onClick?: () => void
}

function ItemShowCard(props: Props) {
    const { flex, src, width = '100%', aspectRatio = 0.99, pid, onClick } = props
    const router = useRouter()
    const handleOnClick = () => {
        if (onClick) {
            onClick()
            return
        }
        router.push(`/view/${pid}`)
    }

    return (
        <Box
            data-textid="item-show-card-box"
            onClick={() => { handleOnClick() }}
            width={width}
            border={1} borderColor={'#0000002f'} sx={{
                aspectRatio: aspectRatio,
                position: 'relative',
                cursor: 'pointer'
            }}
            flex={flex}>
            <Image
                sizes="(max-width: 768px)"
                fill
                style={{ objectFit: 'cover' }}
                src={src}
                alt='Product image'
            />
        </Box>
    )
}

export default ItemShowCard
