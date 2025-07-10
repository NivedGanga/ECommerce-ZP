import React from 'react'
import { Box, Button } from '@mui/material'
import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';

interface Props {
    next?: React.MouseEventHandler<HTMLButtonElement>,
    previous?: React.MouseEventHandler<HTMLButtonElement>,
    isPreviousDisabled?: boolean,
}

function CarouselTransitionButton(props: Props) {
    const { next, previous, isPreviousDisabled = false } = props

    return (
        <Box marginTop={3} display={'flex'} justifyContent={'center'} gap={'0 10px'}>
            <Button
                data-testid='carousel-previous-button'
                className='carousel-previous-button'
                variant='outlined'
                
                sx={{
                    borderColor: 'gray',
                    height: '40px',
                    width: '40px',
                    minWidth: '40px',
                    opacity: 1,
                }}
                onClick={previous}
                disabled={isPreviousDisabled}
            >
                <ArrowBackIosNewOutlined />
            </Button>
            <Button
                data-testid='carousel-next-button'
                className='carousel-next-button'
                variant='outlined'
                sx={{
                    borderColor: 'gray',
                    height: '40px',
                    width: '40px',
                    minWidth: '40px',
                }}
                onClick={next}
            >
                <ArrowForwardIosOutlined />
            </Button>
        </Box>
    )
}

export default CarouselTransitionButton
