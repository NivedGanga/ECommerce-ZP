import MuiContainer from '@/shared_features/display_elements/mui_container/muiContainer'
import { Box } from '@mui/material'
import React from 'react'

interface Props {
    children: React.ReactNode
}

function Layout(props: Props) {
    const { children } = props

    return (
        <MuiContainer>
            <Box height={'100dvh'} width={'100%'} display={'grid'} sx={{ placeContent: 'center' }}>
                {children}
            </Box >
        </MuiContainer >
    )
}

export default Layout
