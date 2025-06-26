import AddToCartButton from '@/shared_features/display_elements/add_to_cart_button/addToCartButton'
import BoxOptionChooser from '@/shared_features/display_elements/box_option_chooser/boxOptionChooser'
import CapitalizedText from '@/shared_features/display_elements/capitalized_text/capitalizedText'
import WishlistIconButton from '@/shared_features/display_elements/wishlist_icon_button/wishlistIconButton'
import { Stack, Typography } from '@mui/material'
import React from 'react'

export default function productDetails() {
    return (
        <Stack width={{
            md: 300,
            xs: '100%'
        }} height={'100%'} padding={'30px 30px 10px 30px'} position={'relative'} justifyContent={'space-between'} border={1} borderColor={'gray'}>
            <Stack gap={1}>
                <CapitalizedText> ABSTRACT PRINT SHIRT</CapitalizedText>
                <Typography> $99</Typography>
                <Typography fontSize={12} sx={{ color: '#0000009f' }}>MRP incl. of all taxes</Typography>
            </Stack>    
            <Typography fontSize={13}>Relaxed-fit shirt. Camp collar and short sleeves. Button-up front.</Typography>
            <Stack gap={2}>
                <BoxOptionChooser title='Color' values={[{ color: 'af9f00', value: 'yellow' },]} />
                <BoxOptionChooser borderVisible showValueInsideChip title='Sizes' values={[{ value: 'xl' },]} />
                <AddToCartButton productId='' />
            </Stack>
            <WishlistIconButton bgColor='white' positionProps={{ top: 0, right: 0 }} productId='id' />
        </Stack>
    )
}
