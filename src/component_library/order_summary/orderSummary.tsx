import CapitalizedText from '@/shared_features/display_elements/capitalized_text/capitalizedText'
import StyledButton from '@/shared_features/display_elements/styled_button/styledButton'
import { Box, Divider, Stack, Typography } from '@mui/material'
import React from 'react'

const OrderSummary = () => {
    return (
        <Box border={1} width={{
            xs: '100%'
        }} padding={5} height={'fit-content'} flex={2}>
            <CapitalizedText>
                Order Summary
            </CapitalizedText>
            <Stack marginTop={3} gap={0.5}>
                {
                    Array(3).fill(0).map((v, k) => (
                        <Box key={k} display={'flex'} justifyContent={'space-between'}>
                            <Typography sx={{ fontSize: '14px' }}>
                                Shirt
                            </Typography>
                            <Typography sx={{ fontSize: '14px' }}>
                                $90
                            </Typography>
                        </Box>
                    ))
                }
            </Stack>
            <Divider sx={{ margin: '10px 0', borderColor: 'gray' }} />
            <Box display={'flex'} marginBottom={3} justifyContent={'space-between'}>
                <CapitalizedText>
                    Total
                </CapitalizedText>
                <Typography>
                    $270
                </Typography>
            </Box>
            <StyledButton variant='contained'>
                Continue
            </StyledButton>
        </Box>
    )
}

export default OrderSummary