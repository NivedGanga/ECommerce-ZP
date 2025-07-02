'use client'
import { List, ListItemButton, ListItemText, Paper, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material'
import React, { useState } from 'react'
import { useAccountOptions } from './useAccountOptions'
import { useRouter } from 'next/navigation'

interface AccountOptionsProps {
    onClose: () => void
    onDialogStateChange?: (isOpen: boolean) => void
}

const AccountOptions = ({ onClose, onDialogStateChange }: AccountOptionsProps) => {
    const { handleLogout, loading } = useAccountOptions()
    const router = useRouter()
    const [logoutDialogOpen, setLogoutDialogOpen] = useState(false)

    const handleMyOrdersClick = () => {
        router.push('/orders')
        onClose()
    }

    const handleLogoutClick = () => {
        setLogoutDialogOpen(true)
        onDialogStateChange?.(true)
    }

    const handleConfirmLogout = async () => {
        await handleLogout()
        setLogoutDialogOpen(false)
        onDialogStateChange?.(false)
        onClose()
    }

    const handleCancelLogout = () => {
        setLogoutDialogOpen(false)
        onDialogStateChange?.(false)
    }

    return (
        <>
            <Paper
                sx={{
                    position: 'absolute', bgcolor: 'white', right: 10, zIndex: 100
                }}
            >
                <List>
                    <ListItemButton
                        onClick={handleMyOrdersClick}>
                        <ListItemText sx={{ color: 'black', textWrap: 'nowrap' }}>My Orders</ListItemText>
                    </ListItemButton>
                    <ListItemButton
                        onClick={handleLogoutClick}
                    >
                        <ListItemText sx={{ color: '#ff1f1fdf' }}>Logout</ListItemText>
                    </ListItemButton>
                </List>
            </Paper>

            <Dialog
                open={logoutDialogOpen}
                onClose={loading ? () => { } : handleCancelLogout}
                aria-labelledby="logout-dialog-title"
                aria-describedby="logout-dialog-description"
                disableEscapeKeyDown={loading}
                BackdropProps={{
                    onClick: (e: React.MouseEvent) => {
                        e.stopPropagation()
                    }
                }}
                PaperProps={{
                    onClick: (e: React.MouseEvent) => {
                        e.stopPropagation()
                    }
                }}
            >
                <DialogTitle id="logout-dialog-title">
                    Confirm Logout
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="logout-dialog-description">
                        Are you sure you want to logout? You will be redirected to the home page.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancelLogout} color="primary" disabled={loading}>
                        Cancel
                    </Button>
                    <Button
                        onClick={handleConfirmLogout}
                        color="error"
                        variant="contained"
                        disabled={loading}
                    >
                        {loading ? 'Logging out...' : 'Logout'}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default AccountOptions