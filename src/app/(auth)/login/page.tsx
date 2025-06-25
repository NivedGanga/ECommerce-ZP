import LoginForm from '@/component_library/login_form/loginForm'
import MainHeadings from '@/shared_features/display_elements/main_headings/mainHeadings'

import React from 'react'



function Login() {
    return (
        <>
            <MainHeadings lineHeight={1.4}  >
                Login
            </MainHeadings>
            <LoginForm />
        </>

    )
}

export default Login
