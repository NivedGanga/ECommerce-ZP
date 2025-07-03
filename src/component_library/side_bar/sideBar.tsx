'use client'
import { Box } from '@mui/material'
import React from 'react'
import FilterOptions from '../filter_options/filterOptions'
import StyledButton from '@/shared_features/display_elements/styled_button/styledButton'
import LoadingSidebarOptions from './loading/loadingSidebarOptions'
import { FilterComponentProps } from '@/core_components/models/facetModel/filterTypes'

const SideBar = ({ facet, handleFacetSelection, clearFacets, applyFilters, q, hasChanges, loading = false, selectedFacets }: FilterComponentProps) => {
    return (
        <Box
            display={{
                xs: 'none',
                md: 'block'
            }}
            position={'relative'}
            paddingTop={4} width={{
                lg: '20rem',
                md: '15rem'
            }}>
            <Box height={'80dvh'} paddingBottom={10} overflow={'auto'}>
                {
                    loading ? <LoadingSidebarOptions /> :
                        <FilterOptions
                            handleFacetSelection={handleFacetSelection}
                            facet={facet}
                            selectedFacets={selectedFacets} />
                }
            </Box>
            {
                !loading && <Box position={'absolute'} left={0} display={'flex'} gap={1} right={0} mx={'auto'} top={'79dvh'}>
                    <StyledButton
                        bgColor='#ffffff'
                        onClick={clearFacets}
                        variant='outlined'>
                        Clear
                    </StyledButton>
                    <StyledButton
                        isEnabled={hasChanges}
                        onClick={() => {
                            if (!hasChanges) return
                            applyFilters(q)
                        }}
                        variant='contained'>
                        Apply
                    </StyledButton>
                </Box>
            }

        </Box>
    )
}

export default SideBar
