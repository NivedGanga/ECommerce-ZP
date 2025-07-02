import { Grid } from '@mui/material'
import React from 'react'
import { useOrdersList } from './useOrdersList'
import ItemShowCard from '@/shared_features/display_elements/item_show_card/itemShowCard'

const OrdersList = () => {
    const { loading, orders } = useOrdersList()
    return (
        <Grid container>
            {
                loading ? 'Loading' : <>
                    {
                        orders.map((order, key) =>
                            <Grid key={key}>

                            </Grid>
                        )
                    }
                </>
            }
        </Grid>
    )
}

export default OrdersList