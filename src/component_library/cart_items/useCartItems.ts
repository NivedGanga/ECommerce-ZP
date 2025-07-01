import { CartModel } from "@/core_components/models/cartModel/cartModel";
import { CurrentUser } from "@/core_components/models/currentUser/currentUser";
import { deleteCartItem, setCartItems, setCartLoading, setUpdatingItem, updateCartItem } from "@/core_components/redux/slices/cart_slice/cartSlice";
import { IRootState } from "@/core_components/redux/store";
import { useCart } from "@/core_components/services/cart_service/useCart";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify/unstyled";

export const useCartItems = () => {
    const { getCartItems, updateCartItemCount, removeCartItem } = useCart()
    const dispatch = useDispatch()
    const currentUser = useSelector((state: IRootState) => state.auth.user)

    const fetchCartItems = (user?: CurrentUser) => {
        if (!user) {
            user = currentUser ?? undefined
        }
        dispatch(setCartLoading(true))
        getCartItems((items) => {
            dispatch(setCartItems(items))
        }, (error) => {
            toast.error(error)
        }, user)
        dispatch(setCartLoading(false))
    }

    const changeQuantity = (cartItem: CartModel, quantity: number) => {
        dispatch(setUpdatingItem(cartItem.product.pid))
        updateCartItemCount(cartItem, quantity, (cartItem) => {
            dispatch(updateCartItem(cartItem))
            dispatch(setUpdatingItem(null))
        }, (error) => {
            toast.error(error)
            dispatch(setUpdatingItem(null))
        })
    }

    const removeItem = (cartItem: CartModel) => {
        dispatch(setUpdatingItem(cartItem.product.pid))
        removeCartItem(cartItem, () => {
            dispatch(deleteCartItem(cartItem.product.pid))
            dispatch(setUpdatingItem(null))
        }, (error) => {
            toast.error(error)
            dispatch(setUpdatingItem(null))
        })
    }

    return {
        fetchCartItems,
        changeQuantity,
        removeItem
    }
}