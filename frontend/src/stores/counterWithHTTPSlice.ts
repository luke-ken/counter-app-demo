import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface CounterWithHTTPSliceState {
    value: number
}

const initialState: CounterWithHTTPSliceState = {value: 0}

export const counterWithHTTPSlice = createSlice({
    name: "counterWithHTTP",
    initialState,
    reducers: {
        setCounter: (state, action: PayloadAction<number>) => {
            state.value = action.payload
        }
    }
})

export const {setCounter} = counterWithHTTPSlice.actions
export default counterWithHTTPSlice.reducer
