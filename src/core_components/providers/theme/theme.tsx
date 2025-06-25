'use client'
import { createTheme, ThemeProvider } from '@mui/material'
import React from 'react'

interface Props {
    children: React.ReactNode
}

function Theme(props: Props) {
    const { children } = props
    const theme = createTheme({
        typography: {
            fontFamily: 'Beatrice Display Trial'
        },
        palette: {
            primary: {
                main: '#000000',
            },
        },
    });
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default Theme
