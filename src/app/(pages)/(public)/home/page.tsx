
import Landing from '@/component_library/home/landing/landing';
import { Box } from '@mui/material'
import React, { Suspense, lazy } from 'react'

// Lazy load the NewThisWeek component
const NewThisWeek = lazy(() => import('@/component_library/home/new_this_week/newThisWeek'));

// Loading fallback component
const LoadingFallback = () => (
    <Box sx={{ margin: '10rem 0', display: 'flex', justifyContent: 'center' }}>
        Loading new arrivals...
    </Box>
);

async function Page() {
    return (
        <Box flexDirection='column'>
            <Landing />
            <Suspense fallback={<LoadingFallback />}>
                <NewThisWeek />
            </Suspense>
        </Box>
    )
}

export default Page
