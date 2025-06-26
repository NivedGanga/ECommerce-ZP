import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface authState {
    isUserAuthenticated: boolean,
    userId: string | null
}

const initialState: authState = {
    isUserAuthenticated: false,
    userId: null
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUser: (state, action: PayloadAction<string>) => {
            state.isUserAuthenticated = true;
            state.userId = action.payload;
        },
        logoutUser: (state) => {
            state.isUserAuthenticated = initialState.isUserAuthenticated
            state.userId = initialState.userId
        }
    }
})


export default authSlice.reducer
export const { loginUser, logoutUser } = authSlice.actions