'use client'
import React, { useState } from 'react'
import NavigationBarIconButton from '../navigation_bar_icon_button/navigationBarIconButton'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useSelector } from 'react-redux';
import { IRootState } from '@/core_components/redux/store';
import { Box } from '@mui/material';
import StyledButton from '../styled_button/styledButton';
import { useRouter } from 'next/navigation';
import AccountOptions from '@/component_library/account_options/accountOptions';
function AccountButton() {
    const user = useSelector((state: IRootState) => state.auth.user)
    const [optionsVisible, setOptionsVisible] = useState(false)
    const isUserAuthenticated = user !== null
    const router = useRouter()
    return (
        <>
            {
                isUserAuthenticated ? <Box position={'relative'}>
                    <NavigationBarIconButton
                        onClick={() => setOptionsVisible(!optionsVisible)}
                    >
                        <AccountCircleOutlinedIcon />
                    </NavigationBarIconButton>
                    {
                        optionsVisible && <AccountOptions />
                    }
                </Box>
                    : <Box>
                        <StyledButton onClick={() => router.push('/login')} >
                            Login
                        </StyledButton>
                    </Box>
            }
        </>
    )
}

export default AccountButton
