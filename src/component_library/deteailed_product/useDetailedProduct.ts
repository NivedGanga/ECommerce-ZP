import { DetailedProductModel } from "@/core_components/models/product_model/productModel"
import { useProduct } from "@/core_components/services/products/useProducts"
import { useState } from "react"
import { toast } from "react-toastify/unstyled"

export const useDetailedProduct = () => {
    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState<DetailedProductModel | null>(null)
    const { fetchDetailedProduct, fetchPriceDetails } = useProduct()
    const getDetailedProduct = (pid: string) => {
        setLoading(true)
        fetchDetailedProduct(pid, (result) => {
            fetchPriceDetails(pid, (priceDetails) => {
                const updatedProductModel: DetailedProductModel = {
                    ...result,
                    currentPrice: priceDetails.currentPrice,
                    previousPrice: priceDetails.previousPrice
                }
                setProduct(updatedProductModel)
                setLoading(false)
            }, (error) => {
                toast.error(error)
                setLoading(false)
            })
        }, (error) => {
            toast.error(error)
            setLoading(false)
        })
    }
    return {
        loading,
        getDetailedProduct,
        product
    }
}