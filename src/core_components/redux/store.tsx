import { configureStore } from "@reduxjs/toolkit";
import authslice from './slices/auth_slice/authSlice'
export const store = configureStore({
    reducer: {
        auth: authslice
    }
})

export type IRootState = ReturnType<typeof store.getState>;