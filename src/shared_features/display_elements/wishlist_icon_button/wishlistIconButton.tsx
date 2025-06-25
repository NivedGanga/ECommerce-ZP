import { FavoriteBorderOutlined } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'

interface Props {
    productId: string,
    position?: 'relative' | 'absolute',
    positionProps?: {
        bottom?: number | string,
        top?: number | string,
        left?: number | string,
        right?: number | string
    },
    bgColor?: string
}

function WishlistIconButton(props: Props) {
    const { position = 'absolute', positionProps = { bottom: '1px', left: '0', right: '0', top: undefined }, bgColor } = props

    return (
        <Button variant='contained'
            sx={{
                bottom: positionProps.bottom,
                left: positionProps.left,
                right: positionProps.right,
                top: positionProps.top,
                margin: 'auto',
                bgcolor: `${bgColor ? bgColor : '#dfdfdfff'}`,
                minWidth: '40px',
                width: '40px',
                position: position
            }} disableElevation >
            <FavoriteBorderOutlined sx={{ transform: 'rotate(-30deg)' }} color='disabled' />
        </Button>
    )
}

export default WishlistIconButton
