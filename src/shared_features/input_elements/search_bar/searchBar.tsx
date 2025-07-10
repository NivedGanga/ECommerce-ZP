'use client'
import { Box, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { useState, useRef, useEffect } from 'react'
import { useSearchBar } from './useSearchbar';
import { useRouter } from 'next/navigation';
interface props {
    width?: string | number
}

function SearchBar(props: props) {
    const { width = '100%' } = props
    const [showDropdown, setShowDropdown] = useState(false)
    const searchBarRef = useRef<HTMLDivElement>(null)
    const { autoComplete, loading, suggestions } = useSearchBar()
    const router = useRouter()

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node
            const dropdownElement = document.getElementById('search-results')

            if (searchBarRef.current &&
                !searchBarRef.current.contains(target) &&
                (!dropdownElement || !dropdownElement.contains(target))) {
                setShowDropdown(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    useEffect(() => {
        setShowDropdown(true)
    }, [suggestions])

    const handleOptionClick = (q: string) => {
        router.push(`/products/${q}`)
    }

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
                    const value = e.target.value;
                    if (searchBarRef.current) {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const timeoutId = (searchBarRef.current as any).timeoutId;
                        if (timeoutId) {
                            clearTimeout(timeoutId);
                        }
                    }
                    const newTimeoutId = setTimeout(() => {
                        autoComplete(value)
                    }, 300);
                    if (searchBarRef.current) {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        (searchBarRef.current as any).timeoutId = newTimeoutId;
                    }
                }}
                onFocus={() => setShowDropdown(true)}
            />
            {((showDropdown && suggestions.length > 0) || loading) && (
                <Box
                    data-testid='search-results'
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
                            loading ? <Typography>Loading...</Typography> :
                                suggestions.map((e, index) => {
                                    return <Box
                                        onClick={() => handleOptionClick(e.searchTerm)}
                                        margin='10px 0px'
                                        sx={{ cursor: 'pointer' }}
                                        key={`${e}-${index}`}>
                                        <Typography onClick={() => handleOptionClick(e.searchTerm)}>
                                            {e.searchTerm}
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
