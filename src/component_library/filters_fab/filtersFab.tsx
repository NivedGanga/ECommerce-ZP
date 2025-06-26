'use client'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined'; import { Box, Dialog, Fab, Typography } from '@mui/material'
import React, { useState } from 'react'
import FilterOptions from '../filter_options/filterOptions';
import StyledButton from '@/shared_features/display_elements/styled_button/styledButton';

const FiltersFab = () => {
    const [filterDialogOpen, setfilterDialogOpen] = useState(false)
    const handleClose = () => {
        setfilterDialogOpen(false);
    };
    const handleClickOpen = () => {
        setfilterDialogOpen(true);
    };

    return (
        <>
            <Fab
                onClick={handleClickOpen}
                sx={{ position: 'fixed', bottom: 15, right: 0, left: 0, m: 'auto', p: '0 20px', width: 'fit-content', backgroundColor: 'white', color: 'black' }} variant='extended' aria-label="add">
                <Typography fontSize={15} color="black">Filters</Typography> &nbsp; &nbsp; <TuneOutlinedIcon fontSize='small' />
            </Fab>
            <Dialog
                onClose={handleClose}
                open={filterDialogOpen}>
                <Box padding={3} width={'70vw'}>
                    <FilterOptions />
                    <StyledButton onClick={handleClose}>
                        Save
                    </StyledButton>
                </Box>
            </Dialog>
        </>
    )
}

export default FiltersFab