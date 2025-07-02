import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { CartModel } from "@/core_components/models/cartModel/cartModel";
import { formatInteger } from "@/core_components/utils/format_integer/format_integer";

interface CartState {
    cartItems: Array<CartModel>
    loading: boolean,
    updatingItem: number | null,
    total: number
}

const initialState: CartState = {
    cartItems: [],
    loading: false,
    updatingItem: null,
    total: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartItems: (state, action: PayloadAction<Array<CartModel>>) => {
            state.cartItems = action.payload
            const total = action.payload.reduce((sum, item) => sum + (item.product.currentPrice! * item.quantity), 0)
            state.total = formatInteger(total)
        },
        setCartLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
        setUpdatingItem: (state, action: PayloadAction<number | null>) => {
            state.updatingItem = action.payload
        },
        updateCartItem: (state, action: PayloadAction<CartModel>) => {
            const index = state.cartItems.findIndex(item => item.product.pid === action.payload.product.pid);
            if (index !== -1) {
                const oldItem = state.cartItems[index];
                const oldItemTotal = oldItem.product.currentPrice! * oldItem.quantity;
                const newItemTotal = action.payload.product.currentPrice! * action.payload.quantity;
                state.cartItems[index] = action.payload;
                state.total = formatInteger(state.total - oldItemTotal + newItemTotal)
            }
        },
        deleteCartItem: (state, action: PayloadAction<number>) => {
            const itemToDelete = state.cartItems.find(item => item.product.pid === action.payload);
            if (itemToDelete) {
                const itemTotal = itemToDelete.product.currentPrice! * itemToDelete.quantity;
                state.total = formatInteger(state.total - itemTotal);
            }
            state.cartItems = state.cartItems.filter(item => item.product.pid !== action.payload);
        }
    }
})


export default cartSlice.reducer
export const { setCartItems, setCartLoading, setUpdatingItem, updateCartItem, deleteCartItem } = cartSlice.actions