import { useCartItems } from "@/component_library/cart_items/useCartItems"
import { ProductModel } from "@/core_components/models/product_model/productModel"
import { useCart } from "@/core_components/services/cart_service/useCart"
import { useState } from "react"
import { toast } from "react-toastify/unstyled"

export const useAddToCart = () => {
    const { addItemToCart } = useCart()
    const { fetchCartItems } = useCartItems()
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState<string | null>(null)

    const addToCart = (product: ProductModel, size: 'xs' | 's' | 'm' | 'l' | 'xl',) => {
        setLoading(true)
        addItemToCart(product, () => {
            toast.success('Item added to cart')
            setSuccess('success')
            fetchCartItems()
            setLoading(false)
        }, (error) => {
            toast.error(error)
            setLoading(false)
        }, size)
    }
    return {
        loading,
        success,
        addToCart
    }
}