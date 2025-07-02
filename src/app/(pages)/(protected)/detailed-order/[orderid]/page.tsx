import DetailedOrder from '@/component_library/detailed_order/detailedOrder'
import { Box } from '@mui/material'
import React from 'react'

const page = async ({ params }: { params: Promise<{ orderid: string }> }) => {
  const { orderid } = await params

  return (
    <Box display={'grid'} height={'100%'} sx={{ placeItems: 'center' }}>
      <DetailedOrder orderid={orderid} />
    </Box>
  )
}

export default page