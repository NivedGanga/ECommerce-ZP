import { Button } from '@mui/material'
import React from 'react'

interface Props {
    children: React.ReactNode,
    variant?: 'outlined' | 'contained' | 'text',
    bgColor?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    color?: string,
    loading?: boolean,
    isEnabled?: boolean
}

function StyledButton(props: Props) {
    const { children, variant = 'outlined', bgColor, color, onClick, loading = false, isEnabled = true } = props

    return (
        <Button
            disabled={!isEnabled}
            loading={loading}
            onClick={onClick}
            disableElevation
            sx={{ padding: '10px 0', width: '100%', bgcolor: `${bgColor}`, color: `${color}` }} variant={variant} >
            {children}
        </Button>
    )
}

export default StyledButton
