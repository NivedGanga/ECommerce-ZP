import { FacetModel, FacetValue, Facet } from '@/core_components/models/facetModel/facetModel'

export interface FilterComponentProps {
    facet: FacetModel | null
    handleFacetSelection: (facetIndex: number, facetValue: FacetValue, operation?: 'add' | 'remove') => void
    clearFacets: () => void
    q?: string
    applyFilters: (q?: string) => void
    facetsSelected: boolean
    hasChanges: boolean
    loading?: boolean
    selectedFacets?: Array<Facet>
}
