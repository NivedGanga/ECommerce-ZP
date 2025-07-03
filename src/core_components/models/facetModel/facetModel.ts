import { facetValuesException } from "@/core_components/utils/constants/constants"

export interface FacetModel {
    facets: Array<Facet>
}

export interface Facet {
    id: string,
    name: string,
    facetValues: Array<FacetValue>
}

export interface FacetValue {
    count: number,
    id: string,
    name: string,
    isSelected?: boolean
}

export const isFacetValueSelected = (selectedFacets: Facet[], facetIndex: number, valueId: string): boolean => {
    return selectedFacets[facetIndex]?.facetValues.some(fv => fv.id === valueId) ?? false
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function fromJsonToFacetModel(json: any): FacetModel {
    const facetModel: FacetModel = {
        facets: [
            ...json.facets
        ]
    }
    facetModel.facets = facetModel.facets.filter(facet => !facetValuesException.includes(facet.id))
    console.log(facetModel)
    return facetModel
}