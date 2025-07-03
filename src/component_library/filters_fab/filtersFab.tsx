'use client'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import { Box, Dialog, Fab, Stack, Typography } from '@mui/material'
import React, { lazy, Suspense } from 'react'
import StyledButton from '@/shared_features/display_elements/styled_button/styledButton';
import { FilterComponentProps } from '@/core_components/models/facetModel/filterTypes';
import { useFilterDialog } from '@/component_library/filters_fab/useFilterDialog';

const FilterOptions = lazy(() => import('../filter_options/filterOptions'));

const FiltersFab = ({ facet, handleFacetSelection, clearFacets, applyFilters, q, hasChanges, selectedFacets }: FilterComponentProps) => {
    const { isOpen, handleClose, handleOpen } = useFilterDialog()

    return (
        <>
            <Fab
                onClick={handleOpen}
                sx={{ position: 'fixed', display: { xs: 'flex', md: 'none' }, alignItems: 'center', bottom: 15, right: 0, left: 0, m: 'auto', p: '0 20px', width: 'fit-content', backgroundColor: 'white', color: 'black' }} variant='extended' aria-label="add">
                <Typography fontSize={15} color="black">Filters  </Typography>&nbsp; &nbsp; <TuneOutlinedIcon fontSize='small' />
            </Fab>
            <Dialog
                onClose={handleClose}
                open={isOpen}>
                <Box padding={3} width={'70vw'}>
                    <Suspense fallback={<div>Loading filters...</div>}>
                        <FilterOptions
                            handleFacetSelection={handleFacetSelection}
                            facet={facet}
                            selectedFacets={selectedFacets} />
                    </Suspense>
                    <Stack direction={'row'} gap={1}>
                        <StyledButton
                            onClick={clearFacets}
                            variant='outlined'>
                            Clear
                        </StyledButton>
                        <StyledButton
                            isEnabled={hasChanges}
                            onClick={() => {
                                if (!hasChanges) return
                                applyFilters(q)
                                handleClose()
                            }}
                            variant='contained'>
                            Apply
                        </StyledButton>
                    </Stack>
                </Box>
            </Dialog>
        </>
    )
}

export default FiltersFab