import { CurrentUser } from "@/core_components/models/currentUser/currentUser";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface authState {
    user: CurrentUser | null
}

export const initialAuthState: authState = {
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        loginUser: (state, action: PayloadAction<CurrentUser>) => {
            state.user = action.payload
        },
        logoutUser: (state) => {
            state.user = null
        }
    }
})

export default authSlice.reducer
export const { loginUser, logoutUser } = authSlice.actions