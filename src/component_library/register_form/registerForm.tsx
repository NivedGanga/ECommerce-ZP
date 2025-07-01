'use client'
import React from 'react'
import StyledTextField from '@/shared_features/input_elements/styled_text_field/styledTextField'
// import { Google } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import StyledButton from '@/shared_features/display_elements/styled_button/styledButton'
import { useRouter } from 'next/navigation'
import { useRegister } from './useRegister'

function RegisterForm() {
    const router = useRouter()
    const { formik, loading } = useRegister()
    return (
        <Box gap={2} margin={'20px 0'} display={'flex'} flexDirection={'column'} width={{
            sm: 400,
            xs: 300
        }}>
            <StyledTextField
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant='outlined'
                helperText={formik.touched.email && formik.errors.email ? formik.errors.email : undefined}
                name="email"
                label='Email'
            >
            </StyledTextField>
            <StyledTextField
                value={formik.values.fullName}
                variant='outlined'
                name='fullName'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.fullName && formik.errors.fullName ? formik.errors.fullName : undefined}
                label='Full name'>
            </StyledTextField>
            <StyledButton loading={loading} onClick={() => formik.handleSubmit()} variant='contained'>
                Submit
            </StyledButton>
            {/* <Divider />
            <StyledButton>
                <Google /> &nbsp;Sign in with Google
            </StyledButton> */}
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Typography sx={{ color: '#000000af' }}>Already have an account? </Typography>
                <Button onClick={() => { router.replace('/login') }}>Login</Button>
            </Box>
        </Box>
    )
}

export default RegisterForm
