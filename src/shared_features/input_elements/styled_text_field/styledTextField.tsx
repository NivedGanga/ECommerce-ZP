import { TextField } from '@mui/material'
import React from 'react'

interface Props {
    variant?: 'outlined' | 'filled' | 'standard'
    name: string,
}

function StyledTextField(props: Props) {
    const { name, variant = 'standard' } = props

    return (
        <TextField
            variant={variant}
            label={name}
            sx={{ bgcolor: '#0000001f' }} fullWidth>
        </TextField>
    )
}

export default StyledTextField
