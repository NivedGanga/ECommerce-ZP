import { Typography, TypographyProps } from '@mui/material'
import React from 'react'

interface Props {
    children: React.ReactNode,
    props?: TypographyProps
}

function CapitalizedText(prop: Props) {
    const { children, props } = prop

    return (
        <Typography sx={{ textTransform: 'uppercase' }} {...props}>
            {children}
        </Typography>
    )
}

export default CapitalizedText
