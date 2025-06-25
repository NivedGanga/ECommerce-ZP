import React from 'react'
import CheckoutTabs from '@/component_library/checkout_tabs/checkoutTabs'
import Row from '@/shared_features/display_elements/row/row'
import { Box } from '@mui/material'
import FinalizedOrdersummary from '../finalized_order_summary/finalizedOrdersummary'

const CheckoutArea = () => {
    return (
        <Row stackProps={{ gap: '300px' }}>
            <Box flex={2}>
                <CheckoutTabs />
            </Box>
            <FinalizedOrdersummary />
        </Row>
    )
}

export default CheckoutArea