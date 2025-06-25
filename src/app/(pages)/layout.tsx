import TopBar from '@/component_library/top_bar/topBar'
import { Box } from '@mui/material'
import React from 'react'

interface Props {
    children: React.ReactNode
}

function Layout(props: Props) {
    const { children } = props

    return (
        <Box overflow={'hidden'} display={'flex'} flexDirection={'column'} height={'100vh'} >
            <TopBar />
            <Box flex={1} overflow={'auto'} >
                {children}
            </Box>
        </Box>
    )
}

export default Layout
