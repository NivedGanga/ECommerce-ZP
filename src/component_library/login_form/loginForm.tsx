'use client'
import React from 'react'
import StyledTextField from '@/shared_features/input_elements/styled_text_field/styledTextField'
import { Google } from '@mui/icons-material'
import { Box, Button, Divider, Typography } from '@mui/material'
import StyledButton from '@/shared_features/display_elements/styled_button/styledButton'
import { useRouter } from 'next/navigation'

function LoginForm() {
    const router = useRouter()
    return (
        <Box gap={2} margin={'20px 0'} display={'flex'} flexDirection={'column'} alignItems={'flex-end'} width={400}>
            <StyledTextField
                variant='outlined'
                name="email">
            </StyledTextField>
            <StyledTextField
                variant='outlined'
                name='Password'>
            </StyledTextField>
            <Button sx={{ padding: 0, width: 'min-content' }}>
                Forgot&nbsp;Password
            </Button>
            <StyledButton variant='contained'>
                Submit
            </StyledButton>
            <Divider />
            <StyledButton>
                <Google /> &nbsp;Sign in with Google
            </StyledButton>
            <Box display={'flex'} alignItems={'center'} width={"100%"} justifyContent={'center'}>
                <Typography sx={{ color: '#000000af' }}>Don&apos;t have an account? </Typography>
                <Button onClick={() => { router.replace('/register') }}>Register</Button>
            </Box>
        </Box>
    )
}

export default LoginForm
