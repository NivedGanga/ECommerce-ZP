'use client'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined'; import { Box, Dialog, Fab, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import FilterOptions from '../filter_options/filterOptions';
import StyledButton from '@/shared_features/display_elements/styled_button/styledButton';
import { FacetModel, FacetValue } from '@/core_components/models/facetModel/facetModel';
interface Props {
    facet: FacetModel | null;
    handleFacetSelection: (facetIndex: number, facetValue: FacetValue, operation?: 'add' | 'remove') => void;
    clearFacets: () => void;
    q?: string;
    applyFilters: (q?: string) => void;
    facetsSelected: boolean;
}
const FiltersFab = ({ facet, handleFacetSelection, clearFacets, applyFilters, q, facetsSelected }: Props) => {
    const [filterDialogOpen, setfilterDialogOpen] = useState(false)
    const handleClose = () => {
        setfilterDialogOpen(false);
    };
    const handleClickOpen = () => {
        setfilterDialogOpen(true);
    };
    const [reseted, setReseted] = useState(false)
    useEffect(() => {
        if (reseted) {
            setReseted(false)
        }
    }, [reseted])
    return (
        <>
            <Fab
                onClick={handleClickOpen}

                sx={{ position: 'fixed', display: { xs: 'block', md: 'none' }, bottom: 15, right: 0, left: 0, m: 'auto', p: '0 20px', width: 'fit-content', backgroundColor: 'white', color: 'black' }} variant='extended' aria-label="add">
                <Typography fontSize={15} color="black">Filters</Typography> &nbsp; &nbsp; <TuneOutlinedIcon fontSize='small' />
            </Fab>
            <Dialog
                onClose={handleClose}
                open={filterDialogOpen}>
                <Box padding={3} width={'70vw'}>
                    <FilterOptions key={reseted ? 'reset' : 'normal'} handleFacetSelection={handleFacetSelection} facet={facet} />
                    <Stack direction={'row'} gap={1}>
                        <StyledButton
                            onClick={() => {
                                clearFacets();
                                setReseted(true)
                            }}
                            variant='outlined'>
                            Clear
                        </StyledButton>
                        <StyledButton
                            isEnabled={facetsSelected}
                            onClick={() => {
                                if (!facetsSelected) return
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