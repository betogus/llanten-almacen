import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: null
}

const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers: {
        setDetail: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setDetail} = detailSlice.actions
export default detailSlice.reducer