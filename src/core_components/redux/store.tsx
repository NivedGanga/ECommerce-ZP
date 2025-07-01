import { configureStore } from "@reduxjs/toolkit";
import authslice from './slices/auth_slice/authSlice'
import homeSlice from './slices/home_slice/homeSlice'
import cartSlice from './slices/cart_slice/cartSlice'
import wishlist from './slices/wishlist_slice/wishlistSlice'

export const store = configureStore({
    reducer: {
        auth: authslice,
        home: homeSlice,
        cart: cartSlice,
        wishlist: wishlist
    }
})

export type IRootState = ReturnType<typeof store.getState>;