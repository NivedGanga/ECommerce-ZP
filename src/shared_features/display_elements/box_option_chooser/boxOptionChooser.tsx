'use client'
import { Box, Chip, Stack, Typography } from '@mui/material'
import React from 'react'

interface Props {
    title: string,
    values: Array<{ value: string, color?: string }>
    showValueInsideChip?: boolean
    borderVisible?: boolean,
    onChange: (index: number) => void,
    selectedIndex: number
}

function BoxOptionChooser(props: Props) {
    const { values, title, showValueInsideChip = false, borderVisible = false, onChange, selectedIndex } = props
    const handleClick = (k: number) => {
        onChange(k)
    }
    return (
        <Box>
            <Typography fontWeight={'100'} sx={{ color: '#0000009f' }} fontSize={13}>{title}</Typography>
            <Stack direction={'row'} gap={1}>
                {values.map((value, k) => (
                    <Chip
                        onClick={() => {
                            handleClick(k)
                        }}
                        key={k}
                        slotProps={{
                            label: {
                                sx: {
                                    textOverflow: 'clip'
                                }
                            }
                        }}
                        sx={{
                            bgcolor: `${value.color ?? '#ffffff00'}`,
                            width: '40px',
                            height: '40px',
                            minWidth: '40px',
                            minHeight: '40px',
                            borderRadius: 0,
                            textOverflow: 'clip',
                            border: `${borderVisible ? `${selectedIndex == k ? '2px solid black' : '1px solid gray'}` : '0 solid gray'} `,
                        }}
                        label={showValueInsideChip ? value.value.toLowerCase() : ''}
                    />
                ))
                }
            </Stack>
        </Box>
    )
}

export default BoxOptionChooser
