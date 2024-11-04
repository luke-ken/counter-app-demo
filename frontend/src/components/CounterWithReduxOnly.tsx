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
        <div className="p-4 bg-gray-100 shadow-md rounded">
            <div className="text-2xl font-bold mb-2">Count: {count}</div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600" onClick={handleIncrement}>Increment</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600" onClick={handleDecrement}>Decrement</button>
            <button className="bg-white text-red-600 px-4 py-2 rounded mr-2 hover:bg-red-100 outline outline-1 outline-red-600" onClick={handleReset}>Reset</button>
        </div>
    )
}
