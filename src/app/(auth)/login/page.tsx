import LoginForm from '@/component_library/login_form/loginForm'
import MainHeadings from '@/shared_features/display_elements/main_headings/mainHeadings'

import React from 'react'



function Login() {
    return (
        <React.Fragment>
            <MainHeadings lineHeight={1}  >
                Login
            </MainHeadings>
            <LoginForm />
        </React.Fragment>

    )
}

export default Login
