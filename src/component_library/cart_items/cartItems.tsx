'use client'
import { IRootState } from '@/core_components/redux/store'
import CartItemCard from '@/shared_features/display_elements/cart_item_card/cartItemCard'
import { Grid } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const CartItems = () => {
  const cartstate = useSelector((state: IRootState) => state.cart)
  console.log(cartstate.cartItems)
  return (
    <Grid container rowSpacing={3} columnSpacing={2} width={'100%'}>
      {
        cartstate.cartItems.map((cartItem, k) => (
          <Grid key={k} size={{
            xs: 12,
            sm: 6,
            md: 4
          }}>
            <CartItemCard loading={cartstate.updatingItem === cartItem.product.pid} cartItem={cartItem} />
          </Grid>
        ))
      }

    </Grid>
  )
}

export default CartItems