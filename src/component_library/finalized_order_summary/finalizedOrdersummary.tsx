
import { CartModel } from '@/core_components/models/cartModel/cartModel'
import CapitalizedText from '@/shared_features/display_elements/capitalized_text/capitalizedText'
import Column from '@/shared_features/display_elements/column/column'
import FinalizedOrderItemCard from '@/shared_features/display_elements/finalized_order_item_card/finalizedOrderItemCard'
import Row from '@/shared_features/display_elements/row/row'
import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
interface Props {
    cartItems: Array<CartModel>,
    total: number
}
const FinalizedOrdersummary = (props: Props) => {
    const { cartItems, total } = props
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
                maxHeight={'40dvh'}
                overflow={'auto'}
            >
                {
                    cartItems.map((item, k) => (
                        <FinalizedOrderItemCard key={k} item={item} />
                    ))
                }
            </Box>
            <Divider />
            <Row stackProps={{ sx: { justifyContent: 'space-between' } }}>
                <Typography sx={{ fontSize: '14px' }}>
                    Subtotal
                </Typography>
                <Typography sx={{ fontSize: '14px' }}>
                    ${total}
                </Typography>
            </Row>
            <Row stackProps={{ sx: { justifyContent: 'space-between' } }}>
                <Typography sx={{ fontSize: '14px' }}>
                    Shipping
                </Typography>
                <Typography sx={{ fontSize: '14px' }}>
                    {
                        total > 13 ? "Free" : '$1'
                    }
                </Typography>
            </Row>
            <Divider />
            <Box display={'flex'} marginBottom={3} justifyContent={'space-between'}>
                <CapitalizedText>
                    Total
                </CapitalizedText>
                <Typography>
                    ${
                        total > 13 ? total : total + 1
                    }
                </Typography>
            </Box>
        </Column>
    )
}

export default FinalizedOrdersummary