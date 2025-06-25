import { Box, Container, Divider } from '@mui/material'
import React from 'react'
import WishlistItems from '@/component_library/wishlist_items/wishlistItems'
import CapitalizedText from '@/shared_features/display_elements/capitalized_text/capitalizedText'
const page = () => {
    return (
        <Container maxWidth='lg'>
            <CapitalizedText props={{ sx: { marginTop: '2rem' } }}>
                Your favourites
            </CapitalizedText>

            <Divider sx={{ margin: '5px 0 20px 0', borderColor: 'gray' }} />
            <Box>
                <WishlistItems />
            </Box>
        </Container>
    )
}

export default page