import { createSlice } from "@reduxjs/toolkit"


const initialState =  {
    value: []
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        removeItem: (state,action) => {
            const newCart = state.value.filter(item => item.id !== action.payload)
            state.value = newCart
            
        },
        clear: (state) => {
            state.value = []
        },
        setCart: (state, action) => {
            if (state.value.find(product => product.id === action.payload.id) !== undefined) {
                for (const product of state.value) {
                    if (product.id === action.payload.id) {
                        product.quantity += action.payload.quantity
                        product.price += action.payload.price
                    }
                }
            }
            else {
                state.value.push(action.payload)
            }
            
        }
        
    }
})

export const {totalPrice, removeItem, clear, setCart} = cartSlice.actions
export default cartSlice.reducer