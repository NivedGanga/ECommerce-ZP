import { getAuth, onAuthStateChanged } from "firebase/auth"
import { app } from "../../../../firebase.config"
import { useDispatch } from "react-redux"
import { loginUser } from "@/core_components/redux/slices/auth_slice/authSlice"
import { extractCurrentUser } from "@/core_components/models/currentUser/currentUser"
import { useCartItems } from "@/component_library/cart_items/useCartItems"
import { useWishlistItems } from "@/component_library/wishlist_items/useWishlistItems"

export const useAuthorization = () => {
    const dispatch = useDispatch()
    const { fetchCartItems } = useCartItems()
    const { getWishlist } = useWishlistItems()

    const checkUserSignedIn = () => {
        const auth = getAuth(app)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(loginUser(extractCurrentUser(user)))
                fetchCartItems(extractCurrentUser(user))
                getWishlist(extractCurrentUser(user))
            }
        })
    }

    return {
        checkUserSignedIn
    }
}