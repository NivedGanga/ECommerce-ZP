import React from 'react'
import RegisterForm from '@/component_library/register_form/registerForm'
import MainHeadings from '@/shared_features/display_elements/main_headings/mainHeadings'


function Register() {
    return (
        <>
            <MainHeadings lineHeight={1.4}  >
                Register
            </MainHeadings>
            <RegisterForm />
        </>
    )
}

export default Register
