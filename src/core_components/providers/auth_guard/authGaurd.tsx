'use client'
import { IRootState } from '@/core_components/redux/store'
import { getCookie } from 'cookies-next/client'
import { redirect } from 'next/navigation'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from '@/core_components/redux/slices/auth_slice/authSlice'
import { toast } from 'react-toastify/unstyled'

interface Props {
    children: React.ReactNode
}

function AuthGaurd(props: Props) {
    const { children } = props
    const dispatch = useDispatch()
    const isUserAuthenticated = useSelector((state: IRootState) => state.auth.isUserAuthenticated)

    useEffect(() => {
        const userIdFromCookie = getCookie('userId')
        if (userIdFromCookie && !isUserAuthenticated) {
            dispatch(loginUser(userIdFromCookie as string))
        } else if (!userIdFromCookie && !isUserAuthenticated) {
            console.log('user not authenticated')
            toast('Aadhyam poyi login cheyy chekka')
            redirect('/login')
        }
    }, [isUserAuthenticated, dispatch])

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
