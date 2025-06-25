import { AppBar, Box, Container } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import TopBarTextButton from '@/shared_features/display_elements/top_bar_text_button/topBarTextButton';
import TopbarIconButton from '@/shared_features/display_elements/topbar_icon_button/topbarIconButton';

function TopBar() {
    return (
        <AppBar
            position='relative'
            sx={{
                bgcolor: 'transparent',
                backdropFilter: 'blur(10px)',
            }}
            elevation={0}>
            <Container sx={{ margin: '20px auto', alignItems: 'center', display: 'flex', justifyContent: 'space-between' }} maxWidth='lg'>
                <Box sx={{ display: 'flex', gap: '0 10px', alignItems: 'center', }}>
                    <MenuIcon sx={{ marginRight: '20px' }} color='action' />
                    <TopBarTextButton text='Home' route='/home' />
                    <TopBarTextButton text='Collections' route='/products' />
                    <TopBarTextButton text='New' route='/' />
                </Box>
                <Box display={'flex'} gap={'0 30px'} sx={{}}>
                    <TopbarIconButton tilted route='/wishlist'>
                        <FavoriteBorderOutlinedIcon />
                    </TopbarIconButton>
                    <TopbarIconButton route='/cart' text='cart' haveText>
                        <ShoppingCartOutlinedIcon />
                    </TopbarIconButton>
                    <TopbarIconButton route='/'>
                        <AccountCircleOutlinedIcon />
                    </TopbarIconButton>
                </Box>
            </Container>
        </AppBar>
    )
}

export default TopBar
