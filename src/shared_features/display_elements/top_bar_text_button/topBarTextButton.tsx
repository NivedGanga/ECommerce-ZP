'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button, Typography } from '@mui/material'

interface Props {
    text: string,
    route: string
}

function TopBarTextButton(props: Props) {
    const { text, route } = props
    const router = useRouter()
    return (
        <Button onClick={() => router.push(route)} sx={{ color: 'black' }} variant='text'>
            <Typography sx={{ fontFamily: 'Beatrice Display Trial', fontSize: '14px' }}>
                {text}
            </Typography>
        </Button>
    )
}

export default TopBarTextButton
