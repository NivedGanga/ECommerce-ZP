import React from 'react'
import { List, Typography } from '@mui/material'
import DottedDivider from '@/shared_features/display_elements/dotted_divider/dottedDivider';
import FilterAccordion from '@/shared_features/display_elements/filter_accordion/filterAccordion';
import { FacetModel, FacetValue } from '@/core_components/models/facetModel/facetModel';

const FilterOptions = ({ facet, handleFacetSelection }: { facet: FacetModel | null, handleFacetSelection: (facetIndex: number, facetValue: FacetValue, operation?: 'add' | 'remove') => void}) => {
    return (
        <React.Fragment >
            <Typography marginBottom={3} fontSize={'large'}>Filters</Typography>
            {
                facet && <List>
                    {facet.facets.map((facet, index) => (
                        <FilterAccordion
                            handleFacetSelection={handleFacetSelection}
                            facetIndex={index} key={index} title={facet.name} options={facet.facetValues} />
                    ))}
                    <DottedDivider />
                </List>
            }

        </React.Fragment>
    )
}

export default FilterOptions