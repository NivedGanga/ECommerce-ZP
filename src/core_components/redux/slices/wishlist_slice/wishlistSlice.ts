import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { ProductModel } from "@/core_components/models/product_model/productModel";

interface WishlistState {
    wishlistItems: Array<ProductModel>
    loading: boolean,
    updatingItem: number | null
}

const initialState: WishlistState = {
    wishlistItems: [],
    loading: false,
    updatingItem: null
}

const wishlistSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setWishlistItems: (state, action: PayloadAction<Array<ProductModel>>) => {
            state.wishlistItems = action.payload
        },
        addWishlistItem: (state, action: PayloadAction<ProductModel>) => {
            state.wishlistItems = [...state.wishlistItems, action.payload]
        },
        setWishlistLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
        removeWishlistItem: (state, action: PayloadAction<number>) => {
            state.wishlistItems = state.wishlistItems.filter(item => item.pid !== action.payload);
        }
    }
})


export default wishlistSlice.reducer
export const { removeWishlistItem, setWishlistItems, setWishlistLoading,addWishlistItem } = wishlistSlice.actions