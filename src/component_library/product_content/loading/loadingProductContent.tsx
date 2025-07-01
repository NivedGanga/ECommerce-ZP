import LoadingItemCard from '@/shared_features/display_elements/item_card/loading/loadingItemCard'
import { Grid } from '@mui/material'
import React from 'react'

const LoadingProductContent = () => {
    return (
        < Grid overflow={'hidden'} height={'60dvh'} container marginTop={5} paddingBottom={10} columnSpacing={{
            md: 2,
            xs: 1
        }
        } rowSpacing={2} >
            {
                Array(10).fill(0).map((product, k) => (
                    <Grid key={k} size={{
                        lg: 3,
                        xs: 6,
                        sm: 4
                    }}>
                        <LoadingItemCard sx={{
                            height: {
                                md: 250,
                                xs: 200
                            }
                        }} />
                    </Grid>
                ))
            }
        </Grid >
    )
}

export default LoadingProductContent