'use client'
import { Box, Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

interface Props {
    children: React.ReactNode,
    haveText?: boolean,
    text?: string,
    route: string,
    tilted?: boolean
}

function TopbarIconButton(props: Props) {
    const { children, haveText, text, route, tilted = false } = props
    const router = useRouter()
    return (
        <>{
            haveText ?
                <Box
                    onClick={() => router.push(route)}
                >
                    <Button variant='contained' sx={{ height: '50px', borderRadius: '30px', fontSize: '13px', padding: '0 20px', fontWeight: '300', opacity: '0.85' }}>
                        {text}
                    </Button>
                    <Button variant='outlined' sx={{ width: '50px', height: '50px', borderRadius: '50%', minWidth: '50px', borderWidth: '5px', borderColor: 'black', opacity: '0.85', translate: '-5px 0' }}>
                        {children}
                    </Button>
                </Box> :
                <Button
                    onClick={() => router.push(route)}
                    variant='contained' sx={{ width: '50px', height: '50px', borderRadius: '50%', minWidth: '50px', transform: `${tilted ? 'rotate(-30deg)' : ''}`, opacity: '0.85' }}>
                    {children}
                </Button>
        }
        </>
    )
}

export default TopbarIconButton
