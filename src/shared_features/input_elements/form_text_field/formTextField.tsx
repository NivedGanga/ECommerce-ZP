import { TextField } from '@mui/material'
import React from 'react'

interface Props {
    placeHolder: string,
    type: React.HTMLInputTypeAttribute
}

function FormTextField(props: Props) {
    const { placeHolder, type } = props

    return (
        <TextField
            fullWidth
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
