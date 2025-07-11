
import Row from '@/shared_features/display_elements/row/row'
import { Skeleton, Stack } from '@mui/material'
import React from 'react'

const DetailedProductLoading = () => {
    return (
        <Stack flexDirection={{
            md: 'row',
            xs: 'column'
        }} sx={{ gap: 2, alignItems: 'center' }}>
            <Row stackProps={{ gap: 2 }}>
                <Skeleton
                    data-testid='detailed-product-loading'
                    variant='rectangular'
                    sx={{
                        width: {
                            xs: '250px',
                            md: '320px',
                        },
                        height: '350px'
                    }}
                />
                <Skeleton
                    data-testid='detailed-product-loading'
                    variant='rectangular'
                    sx={{
                        width: {
                            xs: '80px',
                            md: "100px"
                        },
                        height: '350px'
                    }}
                />
            </Row>
            <Skeleton
                data-testid='detailed-product-loading'
                variant='rectangular'
                sx={{
                    width: "350px",
                    height: '450px'
                }}
            />
        </Stack>
    )
}

export default DetailedProductLoading