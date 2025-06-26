import CartItemCard from '@/shared_features/display_elements/cart_item_card/cartItemCard'
import { Grid } from '@mui/material'
import React from 'react'

const CartItems = () => {
  return (
    <Grid container rowSpacing={3} columnSpacing={2} width={'100%'}>
      <Grid size={{
        xs: 12,
        sm: 6,
        md: 4
      }}>
        <CartItemCard title='' />
      </Grid>
      <Grid size={{
        xs: 12,
        sm: 6,
        md: 4
      }}>
        <CartItemCard title='' />
      </Grid>
      <Grid size={{
        xs: 12,
        sm: 6,
        md: 4
      }}>
        <CartItemCard title='' />
      </Grid>
      <Grid size={{
        xs: 12,
        sm: 6,
        md: 4
      }}>
        <CartItemCard title='' />
      </Grid>
    </Grid>
  )
}

export default CartItems