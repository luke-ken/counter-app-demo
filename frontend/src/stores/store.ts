import {configureStore} from "@reduxjs/toolkit";
import counterReduxOnlyReducer from "./counterReduxOnlySlice"

export const store = configureStore({
    reducer: {
        counterReduxOnly: counterReduxOnlyReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
