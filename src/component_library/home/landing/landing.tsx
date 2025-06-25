import { Box } from '@mui/material'
import React from 'react'
import LandingOptionsSection from './landing_options_section/landingOptionsSection'
import LandingGallery from './landing_gallery/landingGallery'

function Landing() {
    return (
        <Box display={'flex'} flexDirection={'row'} gap={'0 50px'} alignItems={'flex-end'} marginTop={3} component='section'>
            <LandingOptionsSection />
            <LandingGallery />
        </Box >
    )
}

export default Landing
