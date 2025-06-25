import { Checkbox, FormControlLabel, Typography } from '@mui/material'
import React from 'react'

interface Props {
    label: string,
    count: number
}

function AccordionOptionCheckbox(props: Props) {
    const { count, label } = props

    return (
        <FormControlLabel
            control={<Checkbox />}
            label={
                <Typography>
                    {label} &nbsp;&nbsp;(
                    <Typography sx={{ color: 'blue' }} component={'span'}>
                        {count}
                    </Typography>
                    )
                </Typography>}
        />
    )
}

export default AccordionOptionCheckbox
