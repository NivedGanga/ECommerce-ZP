'use client'
import { IRootState } from '@/core_components/redux/store'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { redirect } from 'next/navigation'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { app } from '../../../../firebase.config'


interface Props {
    children: React.ReactNode
}

function AuthGaurd(props: Props) {
    const { children } = props

    const user = useSelector((state: IRootState) => state.auth.user)
    const isUserAuthenticated = user !== null
    const auth = getAuth(app)
    useEffect(() => {
        onAuthStateChanged(auth, () => {
            if (!auth.currentUser) {
                redirect('/login')
            }
        })
    }, [isUserAuthenticated])

    if (!isUserAuthenticated) {
        return null
    }

    return (
        <>
            {children}
        </>
    )
}

export default AuthGaurd
