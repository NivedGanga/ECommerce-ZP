'use client'
import { Checkbox, FormControlLabel, Typography } from '@mui/material'
import React from 'react'

interface Props {
    label: string,
    count: number,
    checked?: boolean,
    handleSelection: () => void
    handleRemove: () => void,
}

const AccordionOptionCheckbox = React.memo((props: Props) => {
    const { count, label, checked = false, handleSelection, handleRemove } = props

    return (
        <FormControlLabel
            control={<Checkbox
                onChange={(v) => {
                    if (v.target.checked) {
                        handleSelection()
                    } else {
                        handleRemove()
                    }
                }} checked={checked} />}
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
})

AccordionOptionCheckbox.displayName = 'AccordionOptionCheckbox'

export default AccordionOptionCheckbox
