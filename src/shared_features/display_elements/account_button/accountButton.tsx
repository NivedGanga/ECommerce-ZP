'use client'
import React, { useState, useRef, useEffect } from 'react'
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
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const isUserAuthenticated = user !== null
    const router = useRouter()
    const accountButtonRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isDialogOpen) {
                return
            }

            if (accountButtonRef.current && !accountButtonRef.current.contains(event.target as Node)) {
                setOptionsVisible(false)
            }
        }

        if (optionsVisible) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [optionsVisible, isDialogOpen])

    const handleCloseOptions = () => {
        setOptionsVisible(false)
        setIsDialogOpen(false) 
    }

    const handleDialogStateChange = (isOpen: boolean) => {
        setIsDialogOpen(isOpen)
    }
    return (
        <>
            {
                isUserAuthenticated ? <Box position={'relative'} ref={accountButtonRef}>
                    <NavigationBarIconButton
                        onClick={() => setOptionsVisible(!optionsVisible)}
                    >
                        <AccountCircleOutlinedIcon />
                    </NavigationBarIconButton>
                    {
                        optionsVisible && <AccountOptions onClose={handleCloseOptions} onDialogStateChange={handleDialogStateChange} />
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
