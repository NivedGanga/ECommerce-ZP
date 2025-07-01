'use client'
import { Checkbox, FormControlLabel, Typography } from '@mui/material'
import React, { useState } from 'react'

interface Props {
    label: string,
    count: number,
    checked?: boolean,
    handleSelection: () => void
    handleRemove: () => void,
}

function AccordionOptionCheckbox(props: Props) {
    const { count, label, checked, handleSelection, handleRemove } = props
    const [selected, setselected] = useState(false)
    return (
        <FormControlLabel
            control={<Checkbox
                onChange={(v) => {
                    setselected(v.target.checked)
                    if (v.target.checked) {
                        handleSelection()
                    } else {
                        handleRemove()
                    }
                }} checked={checked ? checked : selected} />}
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
