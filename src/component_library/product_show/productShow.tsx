import ItemShowCard from '@/shared_features/display_elements/item_show_card/itemShowCard'
import { Box, Stack } from '@mui/material'
import React from 'react'

export default function productShow() {
  return (
      <Box display={'flex'} padding={4} gap={4}>
          <ItemShowCard
              aspectRatio={0.95}
              width='22rem'
              src='https://aroka.in/cdn/shop/files/Aroka06-10-233944_fa19b681-8a87-4c40-8f8d-70e87d24b3ba.jpg?v=1749029108&width=590'
          />
          <Stack overflow={'auto'} padding={0} gap={1}>
              {
                  Array(12).fill('0').map((k, i) => (
                      <ItemShowCard
                          key={i}
                          height='100px'
                          aspectRatio={0.9}
                          width='4.5rem'
                          src='https://aroka.in/cdn/shop/files/Aroka06-10-233944_fa19b681-8a87-4c40-8f8d-70e87d24b3ba.jpg?v=1749029108&width=590'
                      />
                  ))
              }
          </Stack>
      </Box>
  )
}
