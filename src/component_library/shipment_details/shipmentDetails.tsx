import CapitalizedText from '@/shared_features/display_elements/capitalized_text/capitalizedText'
import Row from '@/shared_features/display_elements/row/row'
import StyledButton from '@/shared_features/display_elements/styled_button/styledButton'
import { Box, Typography } from '@mui/material'
import React from 'react'

interface Props {
    onProceed: React.MouseEventHandler<HTMLButtonElement>
    onBack: React.MouseEventHandler<HTMLButtonElement>
}

function ShipmentDetails(props: Props) {
    const { onProceed, onBack } = props

    return (
        <Box>
            <CapitalizedText>Shipment Details</CapitalizedText>
            <Typography marginTop={1} fontSize={'small'}>Your order will be dispatched within 3 days</Typography>
            <Typography marginTop={1} fontSize={'small'}>
                Shipment by &nbsp;
                <Typography fontWeight={'600'} fontSize={'small'} component={'span'}>
                    Delhivery
                </Typography>
            </Typography>
            <Typography marginTop={2}>Expected delivery :</Typography>
            <Typography fontWeight={'600'} marginBottom={4}>14 March</Typography>
            <Row stackProps={{ sx: { gap: 2 } }}>
                <StyledButton onClick={onBack} variant='outlined'>
                    Back
                </StyledButton>
                <StyledButton onClick={onProceed} variant='contained'>
                    Order
                </StyledButton>
            </Row>

        </Box>
    )
}

export default ShipmentDetails
