'use client'
import React from 'react'
import StyledTextField from '@/shared_features/input_elements/styled_text_field/styledTextField'
// import { Google } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import StyledButton from '@/shared_features/display_elements/styled_button/styledButton'
import { useRouter } from 'next/navigation'
import { useLogin } from './useLogin'

function LoginForm() {
    const router = useRouter()
    const { formik, loading } = useLogin()
    return (
        <Box gap={2} margin={'20px 0'} width={{
            sm: 400,
            xs: 300
        }} display={'flex'} flexDirection={'column'} alignItems={'flex-end'}>
            <StyledTextField
                value={formik.values.email}
                variant='outlined'
                helperText={formik.errors.email}
                label='Email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="email">
            </StyledTextField>
            <StyledButton loading={loading} onClick={() => {
                console.log("submit button clicked")
                formik.handleSubmit()
            }} variant='contained'>
                Submit
            </StyledButton>
            <Box display={'flex'} alignItems={'center'} width={"100%"} justifyContent={'center'}>
                <Typography sx={{ color: '#000000af' }}>Don&apos;t have an account? </Typography>
                <Button onClick={() => { router.replace('/register') }}>Register</Button>
            </Box>
        </Box>
    )
}

export default LoginForm
