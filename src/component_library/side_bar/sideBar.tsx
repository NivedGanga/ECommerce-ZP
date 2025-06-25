'use client'
import React from 'react'
import { Box, List, Typography } from '@mui/material'
import DottedDivider from '@/shared_features/display_elements/dotted_divider/dottedDivider';
import MultiSelectChipsGroup from '@/shared_features/input_elements/multi_select_chips_group/multiSelectChipsGroup';
import FilterAccordion from '@/shared_features/display_elements/filter_accordion/filterAccordion';
function SideBar() {
    return (
        <Box paddingLeft={5} paddingTop={4} width={'25rem'}>
            <Typography marginBottom={3} fontSize={'large'}>Filters</Typography>
            <MultiSelectChipsGroup title='Size' values={['lg', 'xl']} />
            <List>
                {['Category', 'Price Range', 'Ratings'].map((k) => (
                    <FilterAccordion key={k} title={k} options={['availability', 'sold out']} />
                ))}
                <DottedDivider />
            </List>
        </Box>
    )
}

export default SideBar
