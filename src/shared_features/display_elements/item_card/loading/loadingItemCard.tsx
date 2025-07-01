import { Skeleton } from '@mui/material'
import { SxProps, Theme } from '@mui/system'
import React from 'react'
interface Props {
    sx?: SxProps<Theme>
}

const LoadingItemCard = (props: Props) => {
    const { sx } = props
    return (
        <Skeleton  variant='rectangular'  sx={sx} />
    )
}

export default LoadingItemCard