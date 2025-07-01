'use client'
import { useAuthorization } from '@/core_components/services/authorization/useAuthorization'
import React, { useEffect } from 'react'

interface Props {
    children: React.ReactNode
}

function Authorization(props: Props) {
    const { children } = props
    const { checkUserSignedIn } = useAuthorization()
    useEffect(() => {
        checkUserSignedIn()
    }, [])

    return (
        <>
            {children}
        </>
    )
}

export default Authorization
