import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    page: 0,
    isLoading: false,
    products: []
}
export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
            setLoading: (state) => {
                state.isLoading = true
            }, 
            setProducts: (state, action) => {
                state.isLoading =  false;
                state.page = action.payload.page;
                state.products = action.payload.products
            }
        }
    }
)

export const { setLoading, setProducts } = productSlice.actions