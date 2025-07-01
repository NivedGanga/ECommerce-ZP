import { ProductModel } from "@/core_components/models/product_model/productModel"
import { setGallery } from "@/core_components/redux/slices/home_slice/homeSlice"
import { IRootState } from "@/core_components/redux/store"
import { useProduct } from "@/core_components/services/products/useProducts"
import { womensClothingCategoryId, } from "@/core_components/utils/constants/constants"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export const useLandingGallery = () => {
    const { fetchProducts } = useProduct()
    const [loading, setLoading] = useState(false)
    const [products, setproducts] = useState<Array<ProductModel>>([])
    const dispatch = useDispatch()
    const gallery = useSelector((state: IRootState) => state.home.galleryProducts)

    const fetchGallery = () => {
        if (gallery.length > 0) {
            setproducts(gallery)
            return
        }
        setLoading(true)
        fetchProducts({
            categoryId: womensClothingCategoryId,
            offset: 0,
            store: "US",
            limit: 2
        }, (p) => {
            setproducts(p)
            dispatch(setGallery(p))
            setLoading(false)
        }, () => {
            setLoading(false)
        }
        )

    }
    return {
        fetchGallery,
        loading,
        products
    }
}