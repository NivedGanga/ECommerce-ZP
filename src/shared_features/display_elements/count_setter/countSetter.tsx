'use client'
import { Add, Remove } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import React, { useState } from 'react'

interface Props {
    inititalCount?: number,
    onIncrment: (quantity:number) => void,
    onDecrement: (quantity:number) => void
}

function CountSetter(props: Props) {
    const { inititalCount = 1, onDecrement, onIncrment } = props
    const [count, setCount] = useState(inititalCount)

    const handleIncrementCount = () => {
        onIncrment(count+1)
        setCount(count + 1)
    }
    const handleDecrementCount = () => {
        if (count > 1) {
            onDecrement(count-1)
            setCount(count - 1)
        }
    }
    return (
        <Box border={1}>
            <Button sx={{
                minWidth: "20px",
                height: "27px",
                width: "27px"
            }} onClick={() => handleIncrementCount()}>
                <Add sx={{ fontSize: '15px' }} />
            </Button>
            <Box borderTop={1} borderBottom={1} display={'grid'} sx={{
                width: "27px",
                height: "27px",
                placeContent: 'center',
                fontSize: 'small'
            }}>
                {count}
            </Box>
            <Button
                sx={{
                    minWidth: "20px",
                    height: "27px",
                    width: "27px"
                }}
                onClick={() => handleDecrementCount()}>
                <Remove sx={{ fontSize: '15px' }} />
            </Button>
        </Box>
    )
}

export default CountSetter
