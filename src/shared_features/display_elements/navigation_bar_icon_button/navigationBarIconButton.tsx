'use client'
import { Box, Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

interface Props {
    children: React.ReactNode,
    haveText?: boolean,
    text?: string,
    route?: string,
    tilted?: boolean,
    onClick?: () => void
}

function NavigationBarIconButton(props: Props) {
    const { children, haveText, text, route, tilted = false, onClick } = props
    const router = useRouter()
    return (
        <>{
            haveText ?
                <Box
                    onClick={() => {
                        if (route) router.push(route)

                        else if (onClick) onClick()
                    }}
                >
                    <Button variant='contained' sx={{
                        height: {
                            md: '50px',
                            xs: '45px'
                        }, borderRadius: '30px', fontSize: '13px', padding: '0 20px', fontWeight: '300', opacity: '0.85'
                    }}>
                        {text}
                    </Button>
                    <Button variant='outlined' sx={{
                        width: {
                            md: '50px',
                            xs: '45px'
                        }, height: {
                            md: '50px',
                            xs: '45px'
                        }, borderRadius: '50%', minWidth: {
                            md: '50px',
                            xs: '45px'
                        }, borderWidth: '5px', borderColor: 'black', opacity: '0.85', translate: '-5px 0'
                    }}>
                        {children}
                    </Button>
                </Box> :
                <Button
                    onClick={() => {
                        if (route) router.push(route)
                        else if (onClick) onClick()
                    }}
                    variant='contained' sx={{
                        width: {
                            md: '50px',
                            xs: '45px'
                        }, height: {
                            md: '50px',
                            xs: '45px'
                        }, borderRadius: '50%', minWidth: {
                            md: '50px',
                            xs: '45px'
                        }, transform: `${tilted ? 'rotate(-30deg)' : ''}`, opacity: '0.85'
                    }}>
                    {children}
                </Button>
        }
        </>
    )
}

export default NavigationBarIconButton
