import React from 'react'
import { List, Typography } from '@mui/material'
import DottedDivider from '@/shared_features/display_elements/dotted_divider/dottedDivider';
import MultiSelectChipsGroup from '@/shared_features/input_elements/multi_select_chips_group/multiSelectChipsGroup';
import FilterAccordion from '@/shared_features/display_elements/filter_accordion/filterAccordion';

const FilterOptions = () => {
    return (
        <React.Fragment>
            <Typography marginBottom={3} fontSize={'large'}>Filters</Typography>
            <MultiSelectChipsGroup title='Size' values={['lg', 'xl']} />
            <List>
                {['Category', 'Price Range', 'Ratings'].map((k) => (
                    <FilterAccordion key={k} title={k} options={['availability', 'sold out']} />
                ))}
                <DottedDivider />
            </List>
        </React.Fragment>
    )
}

export default FilterOptions