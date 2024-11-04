import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../stores/store.ts";
import {useEffect, useRef} from "react";
import {setCounter} from "../stores/counterWithWebSocketSlice";
import {v4 as uuidv4} from "uuid";


export const CounterWithWebSocket = () => {
    const count = useSelector((state: RootState) => state.counterWithWebSocket.value)
    const dispatch = useDispatch<AppDispatch>()

    const ws = useRef<WebSocket | null>(null)

    // manage opening and closing websocket connection upon component mount and unmount, no external dependencies
    useEffect(() => {
        ws.current = new WebSocket("ws://localhost:9002/ws/counter")

        ws.current.onopen = () => {
            console.log("websocket connected")
        }

        ws.current.onmessage = (event) => {
            const data = JSON.parse(event.data)
            dispatch(setCounter(data.result))
        }

        ws.current.onerror = (error) => {
            console.log(error)
        }

        return () => {
            if (ws.current) {
                console.log("websocket closed")
                ws.current.close()
            }
        }

    }, [])

    const handleIncrement = () => {
        const id = uuidv4()
        ws.current?.send(
            JSON.stringify({jsonrpc: "2.0", method: "increment", id: id, params: {value: count}})
        )
    }

    const handleDecrement = () => {
        const id = uuidv4()
        ws.current?.send(
            JSON.stringify({jsonrpc: "2.0", method: "decrement", id: id, params: {value: count}})
        )
    }

    const handleReset = () => {
        const id = uuidv4()
        ws.current?.send(
            JSON.stringify({jsonrpc: "2.0", method: "reset", id: id, params: {value: count}})
        )
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
