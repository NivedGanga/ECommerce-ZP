'use client'
import NavigationBarTextButton from '@/shared_features/display_elements/navigation_bar_text_button/navigationBarTextButton'
import { Box, Dialog, IconButton } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Column from '@/shared_features/display_elements/column/column';

const NavigationBarRoutingButtons = () => {
    const [navigationDialogVisibility, setNavigationDialogVisibility] = useState(false)
    const handleClick = () => {
        if (navigationDialogVisibility)
            setNavigationDialogVisibility(false)
        else
            setNavigationDialogVisibility(true)
    }
    const handleClose = () => {
        setNavigationDialogVisibility(false)
    }
    return (
        <>
            <IconButton
                data-testid='mobile-navigation-tooltip'
                onClick={handleClick}
                sx={{
                    display: { md: 'none', lg: 'none', xl: 'none', xs: 'block' },
                    position: 'absolute',
                    top: 0, bottom: 0, m: 'auto',
                    left: 15,
                }}>
                <MenuIcon sx={{ fontSize: '28px' }} />
            </IconButton>
            <Box
                data-testid='navigation-buttons'
                sx={{
                    display: {
                        md: 'flex',
                        xs: 'none'
                    }, gap: '0 10px', alignItems: 'center',
                }}>
                <NavigationBarTextButton text='Home' route='/home' />
                <NavigationBarTextButton text='Collections' route='/products' />
            </Box>
            <Dialog
                data-testid='mobile-navigation-buttons-dialog'
                sx={{
                    display: {
                        xs: 'block',
                        md: 'none'
                    }
                }}
                onClose={handleClose}
                open={navigationDialogVisibility}
                slotProps={{
                    paper: {
                        sx: {
                            top: 50,
                            left: 15,
                            width: 'fit-content',
                            position: 'absolute',
                            p: 3
                        }
                    },
                    backdrop: {
                        sx: {
                            backgroundColor: 'transparents',
                            bgcolor: 'transparent'
                        }
                    }
                }}
            >
                <Column>
                    <NavigationBarTextButton onClick={handleClose} text='Home' route='/home' />
                    <NavigationBarTextButton onClick={handleClose} text='Collections' route='/products' />
                </Column>
            </Dialog>
        </>
    )
}

export default NavigationBarRoutingButtons