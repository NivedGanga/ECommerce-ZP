import { AddressModel } from '@/core_components/models/checkoutModel/address_model/addressModel'
import { ContactInfoModel } from '@/core_components/models/checkoutModel/contactInfo_model/contactInfoModel'
import { dateFormater } from '@/core_components/utils/date_formatter/date_formatter'
import Column from '@/shared_features/display_elements/column/column'
import { Typography } from '@mui/material'
import React from 'react'

interface Props {
    shipmentAdrress: AddressModel,
    contactInfo: ContactInfoModel,
    orderedDate: number
}

function DetailedOrderDescriptions(props: Props) {
    const { shipmentAdrress, contactInfo, orderedDate } = props

    return (
        <Column stackProps={{ maxWidth: { lg: 250 },height:'fit-content' }}>
            <Typography fontWeight={'600'} fontSize={18} marginBottom={1}>Shipment Information</Typography>
            {Object.entries(shipmentAdrress)
                .sort(([a], [b]) => a.localeCompare(b))
                .map(([key, value]) => (
                    <Typography key={key} fontSize={14}>
                        {value}
                    </Typography>
                ))}
            <Typography fontWeight={'600'} fontSize={18} marginTop={4} marginBottom={1}>Contact Information</Typography>
            {Object.entries(contactInfo)
                .sort(([a], [b]) => a.localeCompare(b))
                .map(([key, value]) => (
                    <Typography key={key} fontSize={14}>
                        {value}
                    </Typography>
                ))}
            <Typography fontWeight={'600'} fontSize={18} marginTop={4} paddingBottom={1}>Ordered on</Typography>
            <Typography fontSize={14}>  
                {dateFormater(orderedDate)}
            </Typography>
            <Typography fontWeight={'600'} fontSize={18} marginTop={4} paddingBottom={1}>Delivery </Typography>
            <Typography fontSize={14}>
                {dateFormater(orderedDate,5)}
            </Typography>
        </Column>
    )
}

export default DetailedOrderDescriptions
