import { Facet, FacetModel, FacetValue } from "@/core_components/models/facetModel/facetModel"
import { ProductModel } from "@/core_components/models/product_model/productModel"
import { useProduct } from "@/core_components/services/products/useProducts"
import { mensClothingCategoryId, productsItemCount } from "@/core_components/utils/constants/constants"
import { useCallback, useEffect, useState } from "react"
import { toast } from "react-toastify/unstyled"

export const useProductContent = () => {
    const { fetchProducts } = useProduct()
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState<Array<ProductModel>>([])
    const [facet, setFacet] = useState<FacetModel | null>(null)
    const [selectedFacets, setSelectedFacets] = useState<Array<Facet>>([])
    const [initialSelectedFacets, setInitialSelectedFacets] = useState<Array<Facet>>([])
    const [facetsSelected, setFacetsSelected] = useState(false)
    const [hasChanges, setHasChanges] = useState(false)
    const [page, setPage] = useState<number | null>(null)
    useEffect(() => {
        const currentHasSelections = selectedFacets.some(facet => facet.facetValues.length > 0)
        const selectionsChanged = JSON.stringify(selectedFacets) !== JSON.stringify(initialSelectedFacets)

        setFacetsSelected(currentHasSelections)
        setHasChanges(selectionsChanged)
    }, [selectedFacets, initialSelectedFacets])


    const fetchProductContents = useCallback((q?: string, filters?: object, preserveSelectedFacets?: boolean) => {
        setProducts([])
        setLoading(true)
        fetchProducts({
            categoryId: mensClothingCategoryId,
            offset: (page ?? 0) * 30,
            store: 'US',
            q: q,
            limit: productsItemCount,
            sort: 'freshness',
            ...filters
        }, (results, facet) => {
            setFacet(facet)
            const emptyFacets = facet.facets.map((f) => ({ ...f, facetValues: [] }))
            if (!preserveSelectedFacets) {
                setSelectedFacets(emptyFacets)
                setInitialSelectedFacets(emptyFacets)
            }
            setProducts(results)
            setLoading(false)
        },
            (error) => {
                toast.error(error)
                setLoading(false)
            }
        )
    }, [fetchProducts, page])

    const handleFacetSelection = useCallback((facetIndex: number, facetValue: FacetValue, operation?: 'add' | 'remove') => {
        setSelectedFacets(prev =>
            prev.map((facet, index) =>
                index === facetIndex
                    ? {
                        ...facet,
                        facetValues: operation === 'remove'
                            ? facet.facetValues.filter(fv => fv.id !== facetValue.id)
                            : [...facet.facetValues, facetValue]
                    }
                    : facet
            )
        )
    }, [])

    const clearFacets = useCallback(() => {
        if (facet) {
            setSelectedFacets(facet.facets.map((f) => ({ ...f, facetValues: [] })))
        }
    }, [facet])

    const applyFilters = useCallback((q?: string) => {
        const filters = selectedFacets.reduce((cf, facet) => {
            if (facet.facetValues.length === 0) return cf
            const values = facet.facetValues.map((fv) => fv.id)
            return {
                ...cf,
                [facet.id]: values.length === 1 ? values[0] : values.length > 1 ? values.join('%2C') : values
            }
        }, {})
        fetchProductContents(q, filters, true)
        setInitialSelectedFacets(JSON.parse(JSON.stringify(selectedFacets)))
    }, [selectedFacets, fetchProductContents])

    const changePage = useCallback((option: 'prev' | 'next') => {
        if (option == 'next') {
            setPage((page ?? 0) + 1)
        } else {
            setPage((page ?? 0) - 1)
        }
    }, [page])

    return {
        products,
        fetchProductContents,
        loading,
        facet,
        selectedFacets,
        handleFacetSelection,
        clearFacets,
        applyFilters,
        facetsSelected,
        hasChanges,
        changePage,
        page
    }
}