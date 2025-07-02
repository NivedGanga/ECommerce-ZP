import LoadingItemCard from '@/shared_features/display_elements/item_card/loading/loadingItemCard'
import { Grid } from '@mui/material'
import React from 'react'

const LoadingOrderList = () => {
    return (
        <Grid container columnSpacing={5} height={'68dvh'} overflow={'hidden'} width={'100%'} rowSpacing={8}>
            {

                Array(10).fill(0).map((order, key) =>
                    <Grid size={{
                        lg: 3,
                        md: 4,
                        xs: 6
                    }
                    } key={key}>
                        <LoadingItemCard sx={{
                            height: {
                                sm: 300,
                                xs:200
                            }
                        }} />
                    </Grid>
                )

            }
        </Grid>
    )
}

export default LoadingOrderList