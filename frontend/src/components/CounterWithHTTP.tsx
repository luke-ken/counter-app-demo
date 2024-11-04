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
                jsonrpc: "2.0",
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
                jsonrpc: "2.0",
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
                jsonrpc: "2.0",
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
        <div className="p-4 bg-gray-100 shadow-md rounded flex flex-col items-center space-y-2">
            <div className="text-2xl font-bold">Count: {count}</div>
            <div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600" onClick={handleIncrement}>Increment</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600" onClick={handleDecrement}>Decrement</button>
            </div>
            <button className="bg-white text-red-600 px-4 py-2 rounded mr-2 hover:bg-red-100 outline outline-1 outline-red-600" onClick={handleReset}>Reset</button>
        </div>
    )
}
