import CapitalizedText from '@/shared_features/display_elements/capitalized_text/capitalizedText'
import Column from '@/shared_features/display_elements/column/column'
import FinalizedOrderItemCard from '@/shared_features/display_elements/finalized_order_item_card/finalizedOrderItemCard'
import Row from '@/shared_features/display_elements/row/row'
import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

const FinalizedOrdersummary = () => {
    return (
        <Column
            stackProps={{
                border: 1,
                padding: 4,
                height: 'fit-content',
                width: 350,
                paddingBottom: 1,
                gap: 1.3
            }}>
            <CapitalizedText>
                Your Order
            </CapitalizedText>
            <Box
                display={'flex'}
                flexDirection={'column'}
                gap={1}
                maxHeight={'40vh'}
                overflow={'auto'}
            >
                {
                    Array(3).fill(0).map((v, k) => (
                        <FinalizedOrderItemCard key={k} name='' />
                    ))
                }
            </Box>
            <Divider />
            <Row stackProps={{ sx: { justifyContent: 'space-between' } }}>
                <Typography sx={{ fontSize: '14px' }}>
                    Subtotal
                </Typography>
                <Typography sx={{ fontSize: '14px' }}>
                    $90
                </Typography>
            </Row>
            <Row stackProps={{ sx: { justifyContent: 'space-between' } }}>
                <Typography sx={{ fontSize: '14px' }}>
                    Shipping
                </Typography>
                <Typography sx={{ fontSize: '14px' }}>
                    Free
                </Typography>
            </Row>
            <Divider />
            <Box display={'flex'} marginBottom={3} justifyContent={'space-between'}>
                <CapitalizedText>
                    Total
                </CapitalizedText>
                <Typography>
                    $90
                </Typography>
            </Box>
        </Column>
    )
}

export default FinalizedOrdersummary