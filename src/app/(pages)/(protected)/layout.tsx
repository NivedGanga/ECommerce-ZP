import AuthGaurd from '@/core_components/providers/auth_guard/authGaurd'
import React from 'react'

interface Props {
    children: React.ReactNode
}

function Layout(props: Props) {
    const { children } = props

    return (
        <AuthGaurd>
            {children}
        </AuthGaurd >
    )
}

export default Layout
