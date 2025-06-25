import Landing from '@/component_library/home/landing/landing';
import NewThisWeek from '@/component_library/home/new_this_week/newThisWeek';
import { Box } from '@mui/material'
import React from 'react'

function Page() {
    return (
        <Box flexDirection='column'>
            <Landing />
            <NewThisWeek />
        </Box>

    )
}

export default Page
