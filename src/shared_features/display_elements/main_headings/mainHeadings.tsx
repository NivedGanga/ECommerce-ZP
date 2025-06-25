import { Typography } from '@mui/material'
import React from 'react'

interface Props {
    children: React.ReactNode,
    opacity?: number,
    lineHeight?: number
}

function MainHeadings(props: Props) {
    const { children, opacity = 0.85, lineHeight = 1 } = props

    return (
        <Typography
            fontSize={60}
            fontWeight={'900'}
            lineHeight={lineHeight}
            marginTop={10}
            sx={{
                opacity: `${opacity}`
            }}
        >
            {
                children
            }
        </Typography>
    )
}

export default MainHeadings
