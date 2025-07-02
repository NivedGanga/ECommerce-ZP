'use client'
import { ArrowBack } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

const BackButton = ({ customRoute }: { customRoute?: string }) => {
    const router = useRouter()
    return (
        <IconButton onClick={() => {
            if (customRoute) {
                router.push(customRoute)
                return
            }
            router.back()
        }}>
            <ArrowBack width={30} />
        </IconButton>
    )
}

export default BackButton