'use client'
import { Box, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { useState, useRef, useEffect } from 'react'
interface props {
    width?: string | number
}

function SearchBar(props: props) {
    const { width = '100%' } = props
    const [dropDownElements, setDropDownElements] = useState<Array<string>>([])
    const [showDropdown, setShowDropdown] = useState(false)
    const searchBarRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
                setShowDropdown(false)
            }
        }
        
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <Box width={width} marginTop={'20px'} position={'relative'} >
            <TextField
                ref={searchBarRef}
                placeholder='search'
                slotProps={{
                    input: {
                        sx: {
                            width: '90%',
                            bgcolor: '#0000001f',
                            borderRadius: '0px',
                        },
                        startAdornment: (
                            <SearchIcon sx={{ color: 'gray', marginRight: '10px' }} />
                        ),
                    },
                }}
                fullWidth
                onChange={(e) => {
                    setDropDownElements([...dropDownElements, e.target.value])
                    setShowDropdown(true)
                }}
                onFocus={() => setShowDropdown(true)}
            />
            {showDropdown && dropDownElements.length > 0 && (
                <Box
                    id='search-results'
                    position='absolute'
                    borderRadius={2}
                    width='90%'
                    bgcolor={'#ffffffaf'}
                    sx={{
                        translate: '0',
                        backdropFilter: 'blur(3px)'
                    }}
                    overflow={'clip'}
                    padding={3}
                    zIndex={1}
                >
                    <Box
                        maxHeight={'300px'}
                        overflow={'auto'}
                    >
                        {
                            dropDownElements.map((e, index) => {
                                return <Box
                                    margin='10px 0px'
                                    key={`${e}-${index}`}>
                                    <Typography>
                                        {e}
                                    </Typography>
                                </Box>
                            })
                        }
                    </Box>
                </Box>
            )}
        </Box>
    )
}

export default SearchBar
