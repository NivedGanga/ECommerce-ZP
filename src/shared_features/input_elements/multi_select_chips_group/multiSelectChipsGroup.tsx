'use client'
import { Box, Stack, Typography, Chip } from '@mui/material'
import React, { useState } from 'react'

interface Props {
    values: Array<string>
    title?: string
    onChange?: (SelectedChipsValues: Array<string>) => void
}

function MultiSelectChipsGroup(props: Props) {
    const { title, values, onChange } = props
    const [selectedChips, setSelectedChips] = useState<Array<string>>([])

    const handleChipClick = (value: string) => {
        const newSelectedChips = selectedChips.includes(value)
            ? selectedChips.filter(item => item !== value)
            : [...selectedChips, value]

        setSelectedChips(newSelectedChips)
        onChange?.(newSelectedChips)
    }

    return (
        <Box>
            {
                title && <Typography sx={{ mb: 1 }}>{title}</Typography>
            }
            <Stack direction={'row'} flexWrap={'wrap'} gap={1}>
                {
                    values.map((val) => (
                        <Chip
                            key={val}
                            label={val}
                            onClick={() => handleChipClick(val)}
                            variant={selectedChips.includes(val) ? 'filled' : 'outlined'}
                            sx={{
                                borderRadius: 0,
                                cursor: 'pointer',
                                '&.MuiChip-filled': {
                                    bgcolor: '#0000004f'
                                }
                            }}
                        />
                    ))
                }
            </Stack>
        </Box>
    )
}

export default MultiSelectChipsGroup
