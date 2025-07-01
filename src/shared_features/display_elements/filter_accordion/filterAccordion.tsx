import { Accordion, AccordionDetails, AccordionSummary, FormGroup, Typography } from '@mui/material'
import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccordionOptionCheckbox from '../accordion_option_checkbox/accordionOptionCheckbox';
import { FacetValue } from '@/core_components/models/facetModel/facetModel';

interface Props {
    title: string,
    options: Array<FacetValue>,
    facetIndex: number,
    handleFacetSelection: (facetIndex: number, facetValue: FacetValue, operation?: 'add' | 'remove') => void,
}

function FilterAccordion(props: Props) {
    const { title, options, handleFacetSelection, facetIndex } = props

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
                            <AccordionOptionCheckbox
                                handleRemove={() => {
                                    handleFacetSelection(facetIndex, val, 'remove')
                                }}
                                handleSelection={() => {
                                    handleFacetSelection(facetIndex, val)
                                }}
                                checked={val.isSelected} key={index} count={index + 20} label={val.name} />
                        ))
                    }
                </FormGroup>
            </AccordionDetails>
        </Accordion>
    )
}

export default FilterAccordion
