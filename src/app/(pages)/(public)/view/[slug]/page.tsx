import { Box } from '@mui/material'
import ProductShow from '@/component_library/product_show/productShow'
import React from 'react'
import ProductDetails from '@/component_library/product_details/productDetails'

async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { slug } = await params
  return (
    <Box display={'flex'} flexDirection={{
      xs: 'column',
      md: 'row'
    }} alignItems={'center'} height={'100%'} gap={{
      md: 8,
      xs: 4
    }}>
      <ProductShow />
      <ProductDetails />
    </Box>
  )
}

export default Page
