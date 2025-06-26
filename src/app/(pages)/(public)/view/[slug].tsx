import { Box } from '@mui/material'
import ProductShow from '@/component_library/product_show/productShow'
import React from 'react'
import ProductDetails from '@/component_library/product_details/productDetails'
import { useRouter } from 'next/router'

function Page() {
  const router = useRouter()
  const { slug } = router.query
  return (
    <Box display={'flex'} height={'100%'} gap={8}>
      {slug}
      <ProductShow />
      <ProductDetails />
    </Box>
  )
}

export default Page
