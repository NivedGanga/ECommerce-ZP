import React from 'react'
import { List, Typography } from '@mui/material'
import DottedDivider from '@/shared_features/display_elements/dotted_divider/dottedDivider';
import FilterAccordion from '@/shared_features/display_elements/filter_accordion/filterAccordion';
import { FacetModel, FacetValue, Facet } from '@/core_components/models/facetModel/facetModel';

interface FilterOptionsProps {
    facet: FacetModel | null
    handleFacetSelection: (facetIndex: number, facetValue: FacetValue, operation?: 'add' | 'remove') => void
    selectedFacets?: Array<Facet>
}

const FilterOptions = ({ facet, handleFacetSelection, selectedFacets = [] }: FilterOptionsProps) => {
    return (
        <React.Fragment >
            <Typography marginBottom={3} fontSize={'large'}>Filters</Typography>
            {
                facet && <List>
                    {facet.facets.map((facet, index) => (
                        <FilterAccordion
                            handleFacetSelection={handleFacetSelection}
                            facetIndex={index}
                            key={facet.id}
                            title={facet.name}
                            options={facet.facetValues}
                            selectedFacets={selectedFacets} />
                    ))}
                    <DottedDivider />
                </List>
            }

        </React.Fragment>
    )
}

export default FilterOptions