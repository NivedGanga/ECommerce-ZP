import { TextField } from '@mui/material'
import React from 'react'

interface Props {
    placeHolder: string,
    name: string,
    type: React.HTMLInputTypeAttribute,
    handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    handleBlur: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
    helperText?: string,
    value: unknown
}

function FormTextField(props: Props) {
    const { placeHolder, type, name, handleChange, handleBlur, helperText, value } = props

    return (
        <TextField
            value={value}
            fullWidth
            name={name}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={helperText}
            slotProps={{
                input: {
                    sx: {
                        fontSize: '13px'
                    }
                }
            }} placeholder={placeHolder}
            type={type}
        />
    )
}

export default FormTextField
