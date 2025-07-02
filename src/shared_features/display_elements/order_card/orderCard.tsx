'use client'
import { CheckoutModel } from '@/core_components/models/checkoutModel/checkoutModel'
import { Box, Card, CardActionArea, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Row from '../row/row'
import { dateFormater } from '@/core_components/utils/date_formatter/date_formatter'
import { useRouter } from 'next/navigation'

interface Props {
    order: CheckoutModel
}

function OrderCard(props: Props) {
    const router = useRouter()
    const { order } = props
    const size = 50 + (50 / order.items.length)

    const handleClick = () => {
        router.push(`/detailed-order/${order.docId}`)
    }
    return (
        <Card sx={{ backgroundColor: 'transparent' }} elevation={0}>
            <CardActionArea
                onClick={handleClick}
            >
                <Box
                    height={{
                        lg: 320,
                        md: 300,
                        sm: 290,
                        xs: 170
                    }} position={'relative'}>
                    {
                        order.items.map((item, k) => {
                            const translation = (50 / order.items.length) / (order.items.length - (order.items.length - 1))
                            return (
                                <Box key={k} top={`${translation * k}%`} left={`${translation * k}%`} bgcolor={'gray'} position={'absolute'} boxShadow={'-3px -4px 10px rgba(0,0,0,0.2)'} height={`${size}%`} width={`${size}%`}>
                                    <Image objectFit='cover' src={item.product.image!} alt={item.product.name} fill />
                                </Box>
                            )
                        })
                    }
                </Box>
                <Typography sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>
                    {
                        order.items.map((item, k) =>
                            <Typography component={'span'} key={k}>
                                {
                                    item.product.name
                                }x{
                                    item.quantity
                                } ,
                            </Typography>)
                    }
                </Typography>
                <Row stackProps={{ justifyContent: 'space-between' }}>
                    <Typography fontSize={'13px'}>{dateFormater(order.date)}</Typography>
                    <Typography fontSize={'13px'}>${order.total}</Typography>

                </Row>
            </CardActionArea>
        </Card>
    )
}

export default OrderCard
