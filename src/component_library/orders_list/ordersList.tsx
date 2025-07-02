'use client'
import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useOrdersList } from './useOrdersList'
import OrderCard from '@/shared_features/display_elements/order_card/orderCard'
import LoadingOrderList from './loading/loadingOrderList'

const OrdersList = () => {
    const { loading, orders, getAllOrders } = useOrdersList()
    useEffect(() => {
        getAllOrders()
    }, [])

    return (
        <Grid container columnSpacing={5} rowSpacing={8} paddingBottom={10}>
            {
                loading ? <LoadingOrderList />  : <>
                    {
                        orders.map((order, key) =>
                            <Grid size={{
                                lg: 3,
                                md: 4,
                                xs: 6
                            }
                            } key={key}>
                                <OrderCard order={order} />
                            </Grid>
                        )
                    }
                </>
            }
        </Grid>
    )
}

export default OrdersList