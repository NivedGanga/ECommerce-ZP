import { useCartItems } from "@/component_library/cart_items/useCartItems"
import { ProductModel } from "@/core_components/models/product_model/productModel"
import { IRootState } from "@/core_components/redux/store"
import { useCart } from "@/core_components/services/cart_service/useCart"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useSelector } from "react-redux"
import { toast } from "react-toastify/unstyled"

export const useAddToCart = () => {
    const { addItemToCart } = useCart()
    const { fetchCartItems } = useCartItems()
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState<string | null>(null)
    const user = useSelector((state: IRootState) => state.auth.user)
    const router = useRouter()

    const addToCart = (product: ProductModel, size: 'xs' | 's' | 'm' | 'l' | 'xl',) => {
        if (!user) {
            router.push('/login')
            return;
        }
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