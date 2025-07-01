import DetailedProduct from '@/component_library/deteailed_product/detailedProduct'
import { Box } from '@mui/material'


async function Page({ params }: {
  params: Promise<{ pid: string }>
}) {
  const { pid } = await params
  return (
    <Box display={'flex'} flexDirection={{
      xs: 'column',
      md: 'row'
    }} alignItems={'center'} height={'100%'} gap={{
      md: 8,
      xs: 4
    }}>
      <DetailedProduct pid={pid} />
    </Box>
  )
}

export default Page
