import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../stores/store.ts";
import {useEffect, useRef} from "react";
import {setCounter} from "../stores/counterWithWebSocketSlice";
import {v4 as uuidv4} from "uuid";


export const CounterWithWebSocket = () => {
    const count = useSelector((state: RootState) => state.counterWithWebSocket.value)
    const dispatch = useDispatch<AppDispatch>()

    const ws = useRef<WebSocket | null>(null)

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
            JSON.stringify({method: "increment", id: id, params: {value: count}})
        )
    }

    const handleDecrement = () => {
        const id = uuidv4()
        ws.current?.send(
            JSON.stringify({method: "decrement", id: id, params: {value: count}})
        )
    }

    const handleReset = () => {
        const id = uuidv4()
        ws.current?.send(
            JSON.stringify({method: "reset", id: id, params: {value: count}})
        )
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
