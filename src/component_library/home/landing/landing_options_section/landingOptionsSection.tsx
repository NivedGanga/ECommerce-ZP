'use client'
import ClickableText from '@/shared_features/display_elements/clickable_text/clickableText'
import MainHeadings from '@/shared_features/display_elements/main_headings/mainHeadings';
import SearchBar from '@/shared_features/input_elements/search_bar/searchBar'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import { Box, Button, Typography } from '@mui/material'
import { useRouter } from 'next/navigation';
import React from 'react'

function LandingOptionsSection() {
    const router = useRouter()
    return (
        <Box display={'flex'} flex={1} marginTop={'20px'} alignItems={'start'} flexDirection='column'>
            <ClickableText isDimColor text='Men' onClick={() => { console.log("hiii") }} />
            <ClickableText isDimColor text='Women' onClick={() => { console.log("hiii") }} />
            <ClickableText isDimColor text='Child' onClick={() => { console.log("hiii") }} />
            <SearchBar />
            <MainHeadings opacity={0.73}>
                New <br /> Collection
            </MainHeadings>
            <Typography
                textAlign={'left'}
                sx={{
                    color: 'gray'
                }}
            >
                Summer <br /> 2024
            </Typography>
            <Button variant='contained' disableElevation fullWidth
                onClick={() => router.push('/products')}
                sx={{
                    bgcolor: '#0000001f',
                    textTransform: 'capitalize',
                    color: 'black',
                    fontWeight: '300',
                    padding: '8px 20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '30%'
                }}>
                Go to Shop
                <EastOutlinedIcon sx={{
                    color: '#0000009f'
                }} />
            </Button>
        </Box>
    )
}

export default LandingOptionsSection
