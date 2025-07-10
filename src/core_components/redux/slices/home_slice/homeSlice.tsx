import { ProductModel } from "@/core_components/models/product_model/productModel";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface HomeState {
    galleryProducts: Array<ProductModel>
    newProducts: Array<ProductModel>
}

export const initialHomeState: HomeState = {
    galleryProducts: [],
    newProducts: []
}

const homeSlice = createSlice({
    initialState: initialHomeState,
    name: 'home',
    reducers: {
        setGallery: (state, action: PayloadAction<Array<ProductModel>>) => {
            state.galleryProducts = action.payload
        },
        setNewProducts: (state, action: PayloadAction<Array<ProductModel>>) => {
            state.newProducts = action.payload
        },
        markWishlist: (state, action: PayloadAction<Array<number>>) => {
            console.log(action.payload)
            action.payload.forEach(pid => {
                const newProductIndex = state.newProducts.findIndex(product => product.pid === pid);
                if (newProductIndex !== -1) {
                    state.newProducts[newProductIndex].inWishlist = true;
                }
            });
        }
    }
})

export const { setGallery, setNewProducts, markWishlist } = homeSlice.actions;
export default homeSlice.reducer