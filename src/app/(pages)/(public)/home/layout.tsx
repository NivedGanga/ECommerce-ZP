import MuiContainer from '@/shared_features/display_elements/mui_container/muiContainer'
import React from 'react'

interface Props {
    children: React.ReactNode
}

function Layout(props: Props) {
    const { children } = props

    return (
        <MuiContainer>
            {children}
        </MuiContainer>
    )
}

export default Layout
