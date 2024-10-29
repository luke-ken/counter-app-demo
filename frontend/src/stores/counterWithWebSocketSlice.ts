import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface CounterWithWebSocketSliceState {
    value: number
}

const initialState: CounterWithWebSocketSliceState = {value: 0}

export const counterWithWebSocketSlice = createSlice({
    name: "counterWithWebSocket",
    initialState,
    reducers: {
        setCounter: (state, action: PayloadAction<number>) => {
            state.value = action.payload
        }
    }
})

export const {setCounter} = counterWithWebSocketSlice.actions
export default counterWithWebSocketSlice.reducer
