import cartReducer from './features/cartSlice'
import categoryReducer from './features/categorySlice'
import { configureStore } from "@reduxjs/toolkit";
import detailReducer from './features/detailSlice'
import { productSlice } from "./features/productSlice";

export const store = configureStore({
    reducer: {
        detail: detailReducer,
        cart: cartReducer,
        category: categoryReducer,
        product: productSlice.reducer
    }
})