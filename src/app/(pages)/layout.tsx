import NavigationBar from '@/component_library/navigation_bar/navigationBar'
import { Box } from '@mui/material'
import React from 'react'

interface Props {
    children: React.ReactNode
}

function Layout(props: Props) {
    const { children } = props

    return (
        <Box overflow={'hidden'} display={'flex'} flexDirection={'column'} height={'100vh'} >
            <NavigationBar />
            <Box flex={1} overflow={'auto'} >
                {children}
            </Box>
        </Box>
    )
}

export default Layout
