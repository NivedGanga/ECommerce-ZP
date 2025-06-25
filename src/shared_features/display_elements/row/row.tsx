import { Stack, StackProps } from '@mui/material'
import React from 'react'

interface Props {
    children: React.ReactNode
    stackProps?: StackProps
    }

function Row(props: Props) {
    const { children, stackProps } = props

    return (
        <Stack flexDirection={'row'} {...stackProps}>
            {children}
        </Stack>
    )
}

export default Row
