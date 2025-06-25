import React from 'react'
import Row from '../row/row'
import ItemShowCard from '../item_show_card/itemShowCard'
import Column from '../column/column'
import { Typography } from '@mui/material'
import Spacer from '../spacer/spacer'
    
interface Props {
    name: string
}

function FinalizedOrderItemCard(props: Props) {
    const { } = props

    return (
        <Row>
            <ItemShowCard width='80px' src='https://duders.in/cdn/shop/files/MenShirts_1.png?v=1702723797' aspectRatio={0.7} />
            <Column stackProps={{ sx: { p: 1, flex: 1 } }}>
                <Typography>T shirt- Thallumaala edition</Typography>
                <Typography sx={{ color: 'gray', fontSize: '14px' }}>Black/L</Typography>
                <Spacer />
                <Row stackProps={{ sx: { justifyContent: 'space-between' } }}>
                    <Typography color='info'>(1)</Typography>
                    <Typography>$99</Typography>
                </Row>
            </Column>
        </Row>
    )
}

export default FinalizedOrderItemCard
