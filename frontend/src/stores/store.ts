import {configureStore} from "@reduxjs/toolkit";
import counterReduxOnlyReducer from "./counterReduxOnlySlice"
import counterWithHTTPReducer from "./counterWithHTTPSlice"

export const store = configureStore({
    reducer: {
        counterReduxOnly: counterReduxOnlyReducer,
        counterWithHTTP: counterWithHTTPReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
