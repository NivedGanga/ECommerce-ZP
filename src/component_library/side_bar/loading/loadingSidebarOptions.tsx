import { Skeleton, Stack } from '@mui/material'
import React from 'react'

const LoadingSidebarOptions = () => {
    return (
        <Stack>
            {
                Array(6).fill(0).map((v, k) => (
                    <Skeleton height={80} key={k} />
                ))
            }
        </Stack>
    )
}

export default LoadingSidebarOptions