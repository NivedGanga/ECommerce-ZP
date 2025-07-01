'use client'
import { DetailedProductModel } from '@/core_components/models/product_model/productModel'
import { sizes } from '@/core_components/models/sizeChart/sizeChart'
import { sizeChart } from '@/core_components/utils/constants/constants'
import AddToCartButton from '@/shared_features/display_elements/add_to_cart_button/addToCartButton'
import BoxOptionChooser from '@/shared_features/display_elements/box_option_chooser/boxOptionChooser'
import CapitalizedText from '@/shared_features/display_elements/capitalized_text/capitalizedText'
import Column from '@/shared_features/display_elements/column/column'
import WishlistIconButton from '@/shared_features/display_elements/wishlist_icon_button/wishlistIconButton'
import { Chip, Stack, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'

export default function ProductDetails({ product }: {
    product: DetailedProductModel
}) {

    const [selectedIndex, setSelectedIndex] = useState(0)
    const description = useRef<HTMLParagraphElement>(null)
    useEffect(() => {
        if (description.current) {
            description.current.innerHTML = product.description
        }
    }, [product.description])

    return (
        <Stack width={{
            md: 300,
            xs: '100%'
        }} minHeight={'100%'} padding={'30px 30px 10px 30px'} position={'relative'} justifyContent={'space-between'} border={1} borderColor={'gray'}>
            <Stack gap={1}>
                <CapitalizedText>{product.name}</CapitalizedText>
                <Typography> ${product.currentPrice}</Typography>
                <Typography fontSize={12} sx={{ color: '#0000009f' }}>MRP incl. of all taxes</Typography>
            </Stack>
            <Typography component={'p'} ref={description} fontSize={13}></Typography>
            <Stack gap={2}>
                <Column>
                    <Typography fontWeight={'100'} sx={{ color: '#0000009f' }} fontSize={13} component={'label'} >Color</Typography>
                    <Chip label={product.color} sx={{ width: 'fit-content' }} />
                </Column>
                <BoxOptionChooser
                    selectedIndex={selectedIndex}
                    onChange={(index) => {
                        setSelectedIndex(index)
                    }} borderVisible showValueInsideChip title='Sizes' values={sizeChart} />
                <AddToCartButton size={sizes[selectedIndex]} product={product} />
            </Stack>
            <WishlistIconButton bgColor='white' positionProps={{ top: 0, right: 0 }} product={product} />
        </Stack>
    )
}
