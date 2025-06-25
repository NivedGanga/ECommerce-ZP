import { Stack, StackProps } from '@mui/material'
import React from 'react'

interface Props {
    children: React.ReactNode
    stackProps?: StackProps
}

function Column(props: Props) {
    const { children, stackProps } = props

    return (
        <Stack flexDirection={'column'} {...stackProps}>
            {children}
        </Stack>
    )
}

export default Column
