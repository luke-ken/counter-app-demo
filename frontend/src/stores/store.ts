import {configureStore} from "@reduxjs/toolkit";
import counterReduxOnlyReducer from "./counterReduxOnlySlice";
import counterWithHTTPReducer from "./counterWithHTTPSlice";
import counterWithWebSocketReducer from "./counterWithWebSocketSlice";

export const store = configureStore({
    // 3 different stores as all 3 counters have theirs state and counting functionality handled differently
    reducer: {
        counterReduxOnly: counterReduxOnlyReducer,
        counterWithHTTP: counterWithHTTPReducer,
        counterWithWebSocket: counterWithWebSocketReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
