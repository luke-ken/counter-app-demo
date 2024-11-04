const counterWebSocket = (port) => {
    const WebSocketServer = require("ws").WebSocketServer
    const wss = new WebSocketServer({port, path: "/ws/counter"})

    wss.on("connection", (ws) => {
        ws.on("message", (message) => {
            const {id, method, params} = JSON.parse(message.toString())

            let result

            if (method === "increment") {
                result = params.value + 1
            } else if (method === "decrement") {
                result = params.value - 1
            } else if (method === "reset") {
                result = 0
            }

            ws.send(JSON.stringify({jsonrpc: "2.0", id, result}))
        })
    })
}

module.exports = {counterWebSocket}
