import { Divider } from '@mui/material'
import React from 'react'

function DottedDivider() {
    return (
        <Divider sx={{ 
            borderStyle: 'dashed', 
            borderWidth: '1px', 
            borderColor: 'gray[500]' 
        }} />
    )
}

export default DottedDivider