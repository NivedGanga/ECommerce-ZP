import { Container } from '@mui/material'
import { ResponsiveStyleValue, SxProps, Theme } from '@mui/system'
import { Property } from 'csstype'
import React from 'react'

interface Props {
    width?: ResponsiveStyleValue<Property.Width<string | number> | readonly NonNullable<Property.Width<string | number> | undefined>[] | undefined> | ((theme: Theme) => ResponsiveStyleValue<Property.Width<string | number> | readonly NonNullable<Property.Width<string | number> | undefined>[] | undefined>) | null,
    children: React.ReactNode
    sx?: SxProps<Theme>
}

function MuiContainer(props: Props) {
    const { width = '90vw', children, sx } = props

    return (
        <Container maxWidth='xl' sx={{
            width: width,
            ...sx
        }}>
            {children}
        </Container>
    )
}

export default MuiContainer
