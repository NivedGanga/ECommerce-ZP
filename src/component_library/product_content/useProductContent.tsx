import { Facet, FacetModel, FacetValue } from "@/core_components/models/facetModel/facetModel"
import { ProductModel } from "@/core_components/models/product_model/productModel"
import { useProduct } from "@/core_components/services/products/useProducts"
import { mensClothingCategoryId } from "@/core_components/utils/constants/constants"
import { useEffect, useState } from "react"
import { toast } from "react-toastify/unstyled"

export const useProductContent = () => {
    const { fetchProducts } = useProduct()
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState<Array<ProductModel>>([])
    const [facet, setFacet] = useState<FacetModel | null>(null)
    const [selectedFacets, setSelectedFacets] = useState<Array<Facet>>([])
    const [facetsSelected, setFacetsSelected] = useState(false)
    const [page, setPage] = useState(0)

    useEffect(() => {
        setFacetsSelected(selectedFacets.some(facet => facet.facetValues.length > 0))
    }, [selectedFacets])


    const fetchProductContents = (q?: string, filters?: object, preserveSelectedFacets?: boolean) => {
        setProducts([])
        setLoading(true)
        fetchProducts({
            categoryId: mensClothingCategoryId,
            offset: page * 30,
            store: 'US',
            q: q,
            limit: 30,
            sort: 'freshness',
            ...filters
        }, (results, facet) => {
            setFacet(facet)
            if (!preserveSelectedFacets) {
                setSelectedFacets(facet.facets.map((f) => ({ ...f, facetValues: [] })))
            }
            setProducts(results)
            setLoading(false)
        },
            (error) => {
                toast.error(error)
                setLoading(false)
            }
        )
    }

    const handleFacetSelection = (facetIndex: number, facetValue: FacetValue, operation?: 'add' | 'remove') => {
        console.log(facetIndex, facetValue)
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
    }
    const clearFacets = () => {
        setSelectedFacets([])
    }

    const applyFilters = (q?: string) => {
        const filters = selectedFacets.reduce((cf, facet) => {
            if (facet.facetValues.length === 0) return cf
            const values = facet.facetValues.map((fv) => fv.id)
            return {
                ...cf,
                [facet.id]: values.length === 1 ? values[0] : values.length > 1 ? values.join('%2C') : values
            }
        }, {})
        console.log(filters)
        fetchProductContents(q, filters, true)
    }

    const changePage = (option: 'prev' | 'next') => {
        if (option == 'next') {
            setPage(page + 1)
        } else {
            setPage(page - 1)
        }
    }

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
        changePage,
        page
    }
}