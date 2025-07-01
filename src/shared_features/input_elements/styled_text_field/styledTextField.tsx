import { TextField } from '@mui/material'
import React from 'react'

interface Props {
    variant?: 'outlined' | 'filled' | 'standard'
    label: string,
    name: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
    onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
    value: unknown
    helperText?: string
}

function StyledTextField(props: Props) {
    const { label, variant = 'standard', onChange, value, helperText, name, onBlur } = props

    return (
        <TextField  
            helperText={helperText}
            onChange={onChange}
            value={value}
            onBlur={onBlur}
            slotProps={{
                formHelperText: {
                    sx: {
                        backgroundColor: 'transparent',
                        bgcolor: 'transparent',
                        color: 'red'
                    }
                },
                input: {
                    sx: {
                        bgcolor: '#0000001f'
                    }
                }
            }}
            variant={variant}
            label={label}
            name={name}
            fullWidth>
        </TextField>
    )
}

export default StyledTextField
