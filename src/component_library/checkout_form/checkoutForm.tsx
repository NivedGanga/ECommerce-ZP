import CapitalizedText from '@/shared_features/display_elements/capitalized_text/capitalizedText'
import Column from '@/shared_features/display_elements/column/column'
import Row from '@/shared_features/display_elements/row/row'
import StyledButton from '@/shared_features/display_elements/styled_button/styledButton'
import FormTextField from '@/shared_features/input_elements/form_text_field/formTextField'
import { Divider } from '@mui/material'
import React from 'react'
interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    formik: any
}

const CheckoutForm = (props: Props) => {
    const { formik } = props
    return (
        <Column stackProps={{ gap: 1 }}>
            <CapitalizedText>
                Contact info*
            </CapitalizedText>
            <FormTextField value={formik.values.email} handleBlur={formik.handleChange} helperText={formik.touched.email && formik.errors.email || formik.errors.email} handleChange={formik.handleChange} name='email' placeHolder='Email' type='email' />
            <FormTextField value={formik.values.phone} handleBlur={formik.handleChange} helperText={formik.touched.phone && formik.errors.phone || formik.errors.phone} handleChange={formik.handleChange} name='phone' placeHolder='Phone' type='tel' />
            <Divider />
            <CapitalizedText>
                Shipping Address*
            </CapitalizedText>
            <Row stackProps={{ gap: 1 }}>
                <FormTextField value={formik.values.fullName} handleBlur={formik.handleChange} helperText={formik.touched.fullName && formik.errors.fullName || formik.errors.fullName} handleChange={formik.handleChange} name='fullName' placeHolder='Full name' type='text' />
                <FormTextField value={formik.values.phone2} handleBlur={formik.handleChange} helperText={formik.touched.phone2 && formik.errors.phone2 || formik.errors.phone2} handleChange={formik.handleChange} name='phone2' placeHolder='Phone' type='tel' />
            </Row>
            <FormTextField value={formik.values.state} handleBlur={formik.handleChange} helperText={formik.touched.state && formik.errors.state || formik.errors.state} handleChange={formik.handleChange} name='state' placeHolder='State' type='text' />
            <FormTextField value={formik.values.address} handleBlur={formik.handleChange} helperText={formik.touched.address && formik.errors.address || formik.errors.address} handleChange={formik.handleChange} name='address' placeHolder='Address' type='text' />
            <Row stackProps={{ gap: 1, marginBottom: 2 }}>
                <FormTextField value={formik.values.city} handleBlur={formik.handleChange} helperText={formik.touched.city && formik.errors.city || formik.errors.city} handleChange={formik.handleChange} name='city' placeHolder='City' type='text' />
                <FormTextField value={formik.values.postalCode} handleBlur={formik.handleChange} helperText={formik.touched.postalCode && formik.errors.postalCode || formik.errors.postalCode} handleChange={formik.handleChange} name='postalCode' placeHolder='Postal code' type='number' />
            </Row>
            <StyledButton onClick={() => formik.handleSubmit()} variant='contained'>
                Shipping
            </StyledButton>
        </Column>
    )
}

export default CheckoutForm