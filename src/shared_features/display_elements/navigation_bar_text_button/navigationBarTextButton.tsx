'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button, Typography } from '@mui/material'

interface Props {
    text: string,
    route: string,
    onClick?: () => void
}

function NavigationBarTextButton(props: Props) {
    const { text, route, onClick } = props
    const router = useRouter()
    return (
        <Button onClick={() => {
            router.push(route)
            if (onClick)
                onClick()
        }} sx={{ color: 'black' }} variant='text'>
            <Typography sx={{ fontFamily: 'Beatrice Display Trial', fontSize: '14px' }}>
                {text}
            </Typography>
        </Button>
    )
}

export default NavigationBarTextButton
