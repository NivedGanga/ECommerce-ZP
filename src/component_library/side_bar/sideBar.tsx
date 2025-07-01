'use client'
import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import FilterOptions from '../filter_options/filterOptions'
import { FacetModel, FacetValue } from '@/core_components/models/facetModel/facetModel'
import StyledButton from '@/shared_features/display_elements/styled_button/styledButton'
import LoadingSidebarOptions from './loading/loadingSidebarOptions'
interface SideBarProps {
    facet: FacetModel | null;
    handleFacetSelection: (facetIndex: number, facetValue: FacetValue, operation?: 'add' | 'remove') => void;
    clearFacets: () => void;
    q?: string;
    applyFilters: (q?: string) => void;
    facetsSelected: boolean;
    loading?: boolean
}

function SideBar({ facet, handleFacetSelection, clearFacets, applyFilters, q, facetsSelected, loading = false }: SideBarProps) {
    const [reseted, setReseted] = useState(false)
    useEffect(() => {
        if (reseted) {
            setReseted(false)
        }
    }, [reseted])
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
                        <FilterOptions key={reseted ? 'reset' : 'normal'} handleFacetSelection={handleFacetSelection} facet={facet} />
                }
            </Box>
            {
                !loading && <Box position={'absolute'} left={0} display={'flex'} gap={1} right={0} mx={'auto'} top={'79dvh'}>
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
