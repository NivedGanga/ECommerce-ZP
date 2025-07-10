'use client'
import { Box, Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

interface Props {
    children: React.ReactNode,
    text?: string,
    tilted?: boolean,
}

interface EitherProps extends Props {
    route: string,
    onClick?: never
}
interface OrProps extends Props {
    onClick: () => void,
    route?: never
}

function NavigationBarIconButton(props: EitherProps | OrProps) {
    const { children, text, route, tilted = false, onClick } = props
    const router = useRouter()
    return (
        <>
            <Box
                data-testid='navigationbar-button'
                onClick={() => {
                    if (onClick) { onClick() }
                    if (route) { router.push(route) }
                }}
            >
                {
                    text && <Button
                        data-testid='navigationbar-button-text'
                        variant='contained' sx={{
                            height: {
                                md: '50px',
                                xs: '45px'
                            }, borderRadius: '30px', fontSize: '13px', padding: '0 20px', fontWeight: '300', opacity: '0.85'
                        }}>
                        {text}
                    </Button>
                }
                <Button
                    data-testid='navigationbar-button-icon'
                    variant='outlined' sx={{
                        width: {
                            md: '50px',
                            xs: '45px'
                        }, height: {
                            md: '50px',
                            xs: '45px'
                        }, borderRadius: '50%', minWidth: {
                            md: '50px',
                            xs: '45px'
                        }, borderWidth: '5px', borderColor: 'black', opacity: '0.85', translate: '-5px 0',
                        bgcolor: `${text ? '' : 'black'}`,
                        color: `${text ? 'black' : 'white'}`,
                        transform: `${tilted ? 'rotate(-30deg)' : ''}`,
                    }}>
                    {children}
                </Button>
            </Box>

        </>
    )
}

export default NavigationBarIconButton
