
import { ProductModel } from "@/core_components/models/product_model/productModel"
import { setNewProducts } from "@/core_components/redux/slices/home_slice/homeSlice"
import { IRootState } from "@/core_components/redux/store"
import { useProduct } from "@/core_components/services/products/useProducts"
import { newInToday } from "@/core_components/utils/constants/constants"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify/unstyled"

export const useNewThisWeek = () => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState<Array<ProductModel>>([])
    const { fetchProducts } = useProduct()
    const dispatch = useDispatch()
    const newProducts = useSelector((state: IRootState) => state.home.newProducts)

    const fetchNewThisWeek = () => {
        if (newProducts.length > 0) {
            setProducts(newProducts)
            return
        }
        setLoading(true)
        fetchProducts({
            categoryId: newInToday,
            offset: 5,
            store: "US",
            limit: 10,
            sort: "freshness"
        }, (products) => {
            setProducts(products)
            dispatch(setNewProducts(products))
            setLoading(false)
        }, () => {
            toast.error('something went wrong')
            setLoading(false)
        })
    }

    return {
        fetchNewThisWeek,
        loading,
        products
    }
}