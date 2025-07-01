'use client'
import { Box, List, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import { useAccountOptions } from './useAccountOptions'

const AccountOptions = () => {
    const { handleLogout } = useAccountOptions()
    return (
        <Box position={'absolute'} bgcolor={'white'} right={10} sx={{ zIndex: 100 }}>
            <List>
                <ListItemButton                >
                    <ListItemText sx={{ color: 'black' }}>My Orders</ListItemText>
                </ListItemButton>
                <ListItemButton
                    onClick={() => {
                        handleLogout()
                    }}
                >
                    <ListItemText sx={{ color: '#ff1f1fdf' }}>Logout</ListItemText>
                </ListItemButton>
            </List>
        </Box>
    )
}

export default AccountOptions