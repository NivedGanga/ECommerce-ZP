'use client'
import { Link } from '@mui/material'
import React from 'react'

interface Props {
    onClick: () => void
    text: string
    isDimColor?: boolean
}

function ClickableText(props: Props) {
    const { onClick, text, isDimColor = false } = props
    return (
        <Link
            underline='none'
            onClick={() => onClick ? onClick() : null} sx={{ color: `${isDimColor ? 'grey' : 'black'}`, cursor: 'pointer' }}>
            {text}
        </Link>
    )
}

export default ClickableText