import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../stores/store.ts";
import {v4 as uuidv4} from "uuid";
import axios from "axios";
import {setCounter} from "../stores/counterWithHTTPSlice.ts";

export const CounterWithHTTP = () => {
    const count = useSelector((state: RootState) => state.counterWithHTTP.value)
    const dispatch = useDispatch<AppDispatch>()

    const handleIncrement = async () => {
        const id = uuidv4()
        try {
            const response = await axios.post("http://localhost:9001/api/counter-json-rpc", {
                method: "increment",
                id,
                params: {value: count}
            })

            dispatch(setCounter(response.data.result))
        } catch (error) {
            console.log(error)
        }
    }

    const handleDecrement = async () => {
        const id = uuidv4()
        try {
            const response = await axios.post("http://localhost:9001/api/counter-json-rpc", {
                method: "decrement",
                id,
                params: {value: count}
            })

            dispatch(setCounter(response.data.result))
        } catch (error) {
            console.log(error)
        }
    }

    const handleReset = async () => {
        const id = uuidv4()
        try {
            const response = await axios.post("http://localhost:9001/api/counter-json-rpc", {
                method: "reset",
                id,
                params: {value: count}
            })

            dispatch(setCounter(response.data.result))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </>

    )
}
