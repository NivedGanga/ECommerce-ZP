import React from 'react'
import Row from '../row/row'
import ItemShowCard from '../item_show_card/itemShowCard'
import Column from '../column/column'
import { Typography } from '@mui/material'
import Spacer from '../spacer/spacer'
import { CartModel } from '@/core_components/models/cartModel/cartModel'

interface Props {
    item: CartModel
}

function FinalizedOrderItemCard(props: Props) {
    const { item } = props

    return (
        <Row>
            <ItemShowCard width='80px' src={item.product.image!} aspectRatio={0.7} />
            <Column stackProps={{ sx: { p: 1, flex: 1 } }}>
                <Typography>{item.product.name}</Typography>
                <Typography sx={{ color: 'gray', fontSize: '14px' }}>{item.product.color}/{item.size}</Typography>
                <Spacer />
                <Row stackProps={{ sx: { justifyContent: 'space-between' } }}>
                    <Typography color='info'>({item.quantity})</Typography>
                    <Typography>${item.product.currentPrice}</Typography>
                </Row>
            </Column>
        </Row>
    )
}

export default FinalizedOrderItemCard
