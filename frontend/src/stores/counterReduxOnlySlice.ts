import {createSlice} from "@reduxjs/toolkit";


interface CounterReduxOnlySlice {
    value: number
}

const initialState: CounterReduxOnlySlice = {value: 0}

export const counterReduxOnlySlice = createSlice({
    name: "counterReduxOnly",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        reset: (state) => {
            state.value = 0
        }
    }
})

export const {increment, decrement, reset} = counterReduxOnlySlice.actions
export default counterReduxOnlySlice.reducer
