import CapitalizedText from '@/shared_features/display_elements/capitalized_text/capitalizedText'
import Column from '@/shared_features/display_elements/column/column'
import Row from '@/shared_features/display_elements/row/row'
import StyledButton from '@/shared_features/display_elements/styled_button/styledButton'
import FormTextField from '@/shared_features/input_elements/form_text_field/formTextField'
import { Divider } from '@mui/material'
import React from 'react'
interface Props {
    onProceed?: React.MouseEventHandler<HTMLButtonElement>
}
const CheckoutForm = (props: Props) => {
    const { onProceed } = props
    return (
        <Column stackProps={{ gap: 1 }}>
            <CapitalizedText>
                Contact info
            </CapitalizedText>
            <FormTextField placeHolder='Email' type='email' />
            <FormTextField placeHolder='Phone' type='tel' />
            <Divider />
            <CapitalizedText>
                Shipping Address
            </CapitalizedText>
            <Row stackProps={{ gap: 1 }}>
                <FormTextField placeHolder='Full name' type='text' />
                <FormTextField placeHolder='Phone' type='tel' />
            </Row>
            <FormTextField placeHolder='State' type='text' />
            <FormTextField placeHolder='Address' type='text' />
            <Row stackProps={{ gap: 1, marginBottom: 2 }}>
                <FormTextField placeHolder='City' type='text' />
                <FormTextField placeHolder='Postal code' type='number' />
            </Row>
            <StyledButton onClick={onProceed} variant='contained'>
                Shipping
            </StyledButton>
        </Column>
    )
}

export default CheckoutForm