import SideBar from '@/component_library/side_bar/sideBar'
import { Box } from '@mui/material'
import React from 'react'

interface Props {
    children: React.ReactNode
}

function Layout(props: Props) {
    const { children } = props

    return (
        <Box display={'flex'} height={'100%'} overflow={'hidden'} gap={5}>
            <SideBar />
            <Box overflow={'scroll'} flex={1}>
                {children}
            </Box>
        </Box>
    )
}

export default Layout
