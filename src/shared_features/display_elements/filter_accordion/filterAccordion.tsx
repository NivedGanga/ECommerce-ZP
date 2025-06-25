import { Accordion, AccordionDetails, AccordionSummary, FormGroup, Typography } from '@mui/material'
import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccordionOptionCheckbox from '../accordion_option_checkbox/accordionOptionCheckbox';

interface Props {
    title: string,
    options: Array<string>
}

function FilterAccordion(props: Props) {
    const { title, options } = props

    return (
        <Accordion sx={{ bgcolor: 'transparent', padding: 0 }} elevation={0}>
            <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls={title}
                id="panel1-header"
                sx={{ padding: 0 }}
            >
                <Typography component="span">{title}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
                <FormGroup>
                    {
                        options.map((val, index) => (
                            <AccordionOptionCheckbox key={index} count={index + 20} label={val} />
                        ))
                    }
                </FormGroup>
            </AccordionDetails>
        </Accordion>
    )
}

export default FilterAccordion
