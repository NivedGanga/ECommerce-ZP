import { Box } from '@mui/material'
import React from 'react'
import LandingOptionsSection from './landing_options_section/landingOptionsSection'
import LandingGallery from './landing_gallery/landingGallery'

function Landing() {
    return (
        <Box display={'flex'} flexDirection={{
            md: 'row',
            xs: 'column'
        }} gap={{
            md: '0 50px',
            xs: '50px 0px'
        }} alignItems={{
            md: 'flex-end',
            xs: 'flex-start'
        }} marginTop={3} component='section'>
            <LandingOptionsSection />
            <LandingGallery />
        </Box >
    )
}

export default Landing
