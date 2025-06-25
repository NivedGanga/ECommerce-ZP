import { Container } from '@mui/material'
import React from 'react'

interface Props {
    children: React.ReactNode
}

function Layout(props: Props) {
    const { children } = props

    return (
        <Container maxWidth='xl'>
            {children}
        </Container>
    )
}

export default Layout
