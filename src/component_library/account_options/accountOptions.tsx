'use client'
import { List, ListItemButton, ListItemText, Paper } from '@mui/material'
import React from 'react'
import { useAccountOptions } from './useAccountOptions'

const AccountOptions = () => {
    const { handleLogout } = useAccountOptions()
    return (
        <Paper sx={{
            position: 'absolute', bgcolor: 'white', right: 10, zIndex: 100
        }}>
            <List>
                <ListItemButton                >
                    <ListItemText sx={{ color: 'black', textWrap: 'nowrap' }}>My Orders</ListItemText>
                </ListItemButton>
                <ListItemButton
                    onClick={() => {
                        handleLogout()
                    }}
                >
                    <ListItemText sx={{ color: '#ff1f1fdf' }}>Logout</ListItemText>
                </ListItemButton>
            </List>
        </Paper>
    )
}

export default AccountOptions