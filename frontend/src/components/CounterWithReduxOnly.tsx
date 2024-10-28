import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../stores/store.ts";
import {decrement, increment, reset} from "../stores/counterReduxOnlySlice.ts";

export const CounterWithReduxOnly = () => {
    const count = useSelector((state: RootState) => state.counterReduxOnly.value)
    const dispatch = useDispatch<AppDispatch>()

    const handleIncrement = () => {
        dispatch(increment())
    }

    const handleDecrement = () => {
        dispatch(decrement())
    }

    const handleReset = () => {
        dispatch(reset())
    }

    return(
        <>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}
