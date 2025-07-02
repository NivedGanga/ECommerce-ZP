import CapitalizedText from '@/shared_features/display_elements/capitalized_text/capitalizedText'
import { Box, Divider } from '@mui/material'
import React from 'react'

const Page = () => {
    return (
        <Box>
            <CapitalizedText props={{ sx: { marginTop: '2rem' } }}>
                My Orders
            </CapitalizedText>
            <Divider sx={{ margin: '5px 0 20px 0', borderColor: 'gray' }} />
            
        </Box>
    )
}

export default Page