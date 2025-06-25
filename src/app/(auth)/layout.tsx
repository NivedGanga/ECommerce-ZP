import { Box, Container } from '@mui/material'
import React from 'react'

interface Props {
    children: React.ReactNode
}

function Layout(props: Props) {
    const { children } = props

    return (
        <Container maxWidth='lg'>
            <Box height={'100vh'} display={'grid'} sx={{ placeContent: 'center' }}>
                {children}
            </Box >
        </Container >
    )
}

export default Layout
