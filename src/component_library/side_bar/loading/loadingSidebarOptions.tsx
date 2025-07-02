import { Skeleton, Stack } from '@mui/material'
import React from 'react'

const LoadingSidebarOptions = () => {
    return (
        <Stack gap={2}>
            {
                Array(10).fill(0).map((v, k) => (
                    <Skeleton variant='rectangular' height={40} key={k} />
                ))
            }
        </Stack>
    )
}

export default LoadingSidebarOptions