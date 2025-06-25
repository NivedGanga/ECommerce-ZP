'use client'
import { ArrowBack } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

const BackButton = () => {
    const router = useRouter()
    return (
        <IconButton onClick={() => router.back()}>
            <ArrowBack width={30} />
        </IconButton>
    )
}

export default BackButton