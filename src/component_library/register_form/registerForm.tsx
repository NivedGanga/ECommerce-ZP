'use client'
import React from 'react'
import StyledTextField from '@/shared_features/input_elements/styled_text_field/styledTextField'
import { Google } from '@mui/icons-material'
import { Box, Button, Divider, Typography } from '@mui/material'
import StyledButton from '@/shared_features/display_elements/styled_button/styledButton'
import { useRouter } from 'next/navigation'

function RegisterForm() {
    const router = useRouter()
    return (
        <Box gap={2} margin={'20px 0'} display={'flex'} flexDirection={'column'} width={400}>
            <StyledTextField
                variant='outlined'
                name="email">
            </StyledTextField>
            <StyledTextField
                variant='outlined'
                name='Password'>
            </StyledTextField>
            <StyledTextField
                variant='outlined'
                name='Full name'>
            </StyledTextField>
            <StyledButton variant='contained'>
                Submit
            </StyledButton>
            <Divider />
            <StyledButton>
                <Google /> &nbsp;Sign in with Google
            </StyledButton>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Typography sx={{ color: '#000000af' }}>Already have an account? </Typography>
                <Button onClick={() => { router.replace('/login') }}>Login</Button>
            </Box>
        </Box>
    )
}

export default RegisterForm
