import { AppBar, Box } from '@mui/material'
import React from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NavigationBarIconButton from '@/shared_features/display_elements/navigation_bar_icon_button/navigationBarIconButton';
import MuiContainer from '@/shared_features/display_elements/mui_container/muiContainer';
import NavigationBarRoutingButtons from '../navigation_bar_rouing_buttons/navigationBarRoutingButtons';

function NavigationBar() {
    return (
        <AppBar
            position='relative'
            sx={{
                bgcolor: 'transparent',
                backdropFilter: 'blur(10px)',
            }}
            elevation={0}>
            <MuiContainer sx={{
                margin: '20px auto', alignItems: 'center', display: 'flex', justifyContent: {
                    md: 'space-between',
                    xs: 'flex-end'
                },
                position: 'relative'
            }}>
                <NavigationBarRoutingButtons />
                <Box display={'flex'} gap={{
                    md: '0 30px',
                    xs: '0 10px'
                }} sx={{}}>
                    <NavigationBarIconButton tilted route='/wishlist'>
                        <FavoriteBorderOutlinedIcon />
                    </NavigationBarIconButton>
                    <NavigationBarIconButton route='/cart' text='cart' haveText>
                        <ShoppingCartOutlinedIcon />
                    </NavigationBarIconButton>
                    <NavigationBarIconButton route='/'>
                        <AccountCircleOutlinedIcon />
                    </NavigationBarIconButton>
                </Box>
            </MuiContainer>
        </AppBar>
    )
}

export default NavigationBar
