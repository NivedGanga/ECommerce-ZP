import { CurrentUser } from "@/core_components/models/currentUser/currentUser"
import { ProductModel } from "@/core_components/models/product_model/productModel"
import { markWishlist } from "@/core_components/redux/slices/home_slice/homeSlice"
import { addWishlistItem, removeWishlistItem, setWishlistItems, setWishlistLoading } from "@/core_components/redux/slices/wishlist_slice/wishlistSlice"
import { IRootState } from "@/core_components/redux/store"
import { useWishlist } from "@/core_components/services/wishlist_service/useWishlist"
import { useRouter } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify/unstyled"

export const useWishlistItems = () => {
    const { addItemToWishList, getWishlistItems, removeItemFromWishlist } = useWishlist()
    const dispatch = useDispatch()
    const currentUser = useSelector((state: IRootState) => state.auth.user)
    const router = useRouter()

    const addItem = (product: ProductModel) => {
        if (!currentUser) {
            router.push('/login')
        }
        addItemToWishList(product,
            () => {
                dispatch(addWishlistItem(product))
                dispatch(markWishlist([product.pid]))
            }, (error) => {
                toast.error(error)
            },
        )
    }

    const getWishlist = (user?: CurrentUser) => {
        console.log(user)
        if (!user) {
            user = currentUser ?? undefined
        }
        dispatch(setWishlistLoading(true))
        getWishlistItems((wishlistItems) => {
            dispatch(setWishlistLoading(false))
            dispatch(setWishlistItems(wishlistItems))
        }, (error) => {
            console.log(error)
            dispatch(setWishlistLoading(false))
            toast.error(error)
        }, user)
    }

    const removeItem = (product: ProductModel) => {
        removeItemFromWishlist(product.pid.toString(), () => {
            dispatch(removeWishlistItem(product.pid))
        }, (error) => {
            toast.error(error)
        })
    }

    return {
        addItem,
        getWishlist,
        removeItem
    }
}