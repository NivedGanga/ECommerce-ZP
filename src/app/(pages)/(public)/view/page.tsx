import { Box } from '@mui/material'
import ProductShow from '@/component_library/product_show/productShow'
import React from 'react'
import ProductDetails from '@/component_library/product_details/productDetails'

function page() {
  return (
    <Box display={'flex'} height={'100%'} gap={8}>
      <ProductShow />
      <ProductDetails />
    </Box>
  )
}

export default page
