'use client'
import { Box } from '@mui/material'
import React from 'react'
import FilterOptions from '../filter_options/filterOptions'
function SideBar() {
    return (
        <Box
            display={{
                xs: 'none',
                md: 'block'
            }}
            paddingTop={4} width={{
                lg: '20rem',
                md: '15rem'
            }}>
            <FilterOptions />
        </Box>
    )
}

export default SideBar
