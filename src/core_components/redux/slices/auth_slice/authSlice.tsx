import { CurrentUser } from "@/core_components/models/currentUser/currentUser";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
// import { AppDispatch } from "../../store";
// import { cartItemsService } from "@/component_library/cart_items/cartItemsService";


interface authState {
    user: CurrentUser | null
}

const initialState: authState = {
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUser: (state, action: PayloadAction<CurrentUser>) => {
            state.user = action.payload
        },
        logoutUser: (state) => {
            state.user = null
        }
    }
})
// export const loginUserWithCartHandle = (user: CurrentUser) => (dispatch: AppDispatch) => {
//     dispatch(loginUser(user));
//     cartItemsService(user)
// };

export default authSlice.reducer
export const { loginUser, logoutUser } = authSlice.actions