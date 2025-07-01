'use client'
import NavigationBarTextButton from '@/shared_features/display_elements/navigation_bar_text_button/navigationBarTextButton'
import { Box, Dialog, IconButton } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Column from '@/shared_features/display_elements/column/column';

const NavigationBarRoutingButtons = () => {
    const [navigationDialogVisibility, SetNavigationDialogVisibility] = useState(false)
    const handleOpen = () => {
        SetNavigationDialogVisibility(true)
    }
    const handleClose = () => {
        SetNavigationDialogVisibility(false)
    }
    return (
        <>
            <IconButton
                onClick={handleOpen}
                sx={{
                    display: { md: 'none', xs: 'block' },
                    position: 'absolute',
                    top: 0, bottom: 0, m: 'auto',
                    left: 15,
                }}>
                <MenuIcon sx={{ fontSize: '28px' }} />
            </IconButton>
            <Box sx={{
                display: {
                    md: 'flex',
                    xs: 'none'
                }, gap: '0 10px', alignItems: 'center',
            }}>
                <NavigationBarTextButton text='Home' route='/home' />
                <NavigationBarTextButton text='Collections' route='/products' />
                {/* <NavigationBarTextButton text='New' route='/' /> */}
            </Box>
            <Dialog
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
                    <NavigationBarTextButton onClick={handleClose} text='New' route='/' />
                </Column>
            </Dialog>
        </>
    )
}

export default NavigationBarRoutingButtons