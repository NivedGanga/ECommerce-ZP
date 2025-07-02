'use client'
import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useDetailedOrder } from './useDetailedOrder'
import FinalizedOrdersummary from '../finalized_order_summary/finalizedOrdersummary'
import DetailedOrderDescriptions from '../detailed_order_descriptions/detailedOrderDescriptions'

const DetailedOrder = ({ orderid }: { orderid: string }) => {
    const { getDetailedOrder, loading, detailedOrder } = useDetailedOrder()
    useEffect(() => {
        getDetailedOrder(orderid)
    }, [])

    return (
        <Box>
            {
                loading ? "Loading..." : detailedOrder ?
                    <Box display={'flex'} width={'fit-content'} alignItems={'center'} gap={15}>
                        <FinalizedOrdersummary cartItems={detailedOrder.items} total={detailedOrder.total} />
                        <DetailedOrderDescriptions contactInfo={detailedOrder.contactInfo} orderedDate={detailedOrder.date} shipmentAdrress={detailedOrder.address} />
                    </Box >
                    : ''
            }
        </Box>
    )
}

export default DetailedOrder