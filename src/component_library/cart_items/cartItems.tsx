'use client'
import { IRootState } from '@/core_components/redux/store'
import CartItemCard from '@/shared_features/display_elements/cart_item_card/cartItemCard'
import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import emptyCart from '../../../public/assets/images/empty_cart.png'
import Column from '@/shared_features/display_elements/column/column'

const CartItems = () => {
  const cartstate = useSelector((state: IRootState) => state.cart)
  console.log(cartstate.cartItems)
  return (
    <>
      {
        cartstate.cartItems.length == 0 ?
          <Grid container width={'100%'} height={'max-content'} sx={{ placeContent: 'center', placeItems: 'center' }}>
            <Column stackProps={{ alignItems: 'center',gap:2 }}>
              <Image
                style={{
                  placeSelf: 'center'
                }}
                src={emptyCart}
                alt='empty-cart'
                width={'300'}
              />
              <Typography color='textDisabled'>
                No Items in Cart
              </Typography>
            </Column>
          </Grid> : <Grid
            rowSpacing={3} columnSpacing={2} width={'100%'}>
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
      }
    </>

  )
}

export default CartItems