import { Accordion, AccordionDetails, AccordionSummary, FormGroup, Typography } from '@mui/material'
import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccordionOptionCheckbox from '../accordion_option_checkbox/accordionOptionCheckbox';
import { FacetValue, Facet, isFacetValueSelected } from '@/core_components/models/facetModel/facetModel';

interface Props {
    title: string,
    options: Array<FacetValue>,
    facetIndex: number,
    handleFacetSelection: (facetIndex: number, facetValue: FacetValue, operation?: 'add' | 'remove') => void,
    selectedFacets: Array<Facet>
}

const FilterAccordion = React.memo((props: Props) => {
    const { title, options, handleFacetSelection, facetIndex, selectedFacets } = props

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
                        options.map((val) => (
                            <AccordionOptionCheckbox
                                handleRemove={() => {
                                    handleFacetSelection(facetIndex, val, 'remove')
                                }}
                                handleSelection={() => {
                                    handleFacetSelection(facetIndex, val)
                                }}
                                checked={isFacetValueSelected(selectedFacets, facetIndex, val.id)}
                                key={val.id}
                                count={val.count}
                                label={val.name} />
                        ))
                    }
                </FormGroup>
            </AccordionDetails>
        </Accordion>
    )
})

FilterAccordion.displayName = 'FilterAccordion'

export default FilterAccordion
