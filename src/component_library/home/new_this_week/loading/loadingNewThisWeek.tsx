import LoadingItemCard from '@/shared_features/display_elements/item_card/loading/loadingItemCard'
import Row from '@/shared_features/display_elements/row/row'
import React from 'react'

const LoadingNewThisWeek = () => {
    return (
        <Row
            data-testid="new-this-week-loading"
            stackProps={{
                height: '350px',
                gap: 2
            }}>
            <LoadingItemCard sx={{ height: '100%', flex: 1, }} />
            <LoadingItemCard sx={{
                height: '100%', flex: 1, display: {
                    lg: 'block',
                    xs: 'none'
                }
            }} />
            <LoadingItemCard sx={{
                height: '100%', flex: 1, display: {
                    md: 'block',
                    xs: 'none'
                }
            }} />
            <LoadingItemCard sx={{
                height: '100%', flex: 1, display: {
                    sm: 'block',
                    xs: 'none'
                }
            }} />
        </Row>
    )
}

export default LoadingNewThisWeek