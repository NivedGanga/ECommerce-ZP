'use client'
import React, { useEffect } from 'react'
import { useAuthStatusCheck } from './useAuthStatus';

const AuthStatusCheck = () => {
    const { completeAuthentication } = useAuthStatusCheck()
    useEffect(() => {
        completeAuthentication()
    }, []);

    return (
        <div>
            <h2>Verifying your email...</h2>
            <p>Please wait while we complete your authentication.</p>
        </div>
    )
}

export default AuthStatusCheck