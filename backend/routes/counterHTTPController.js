const express = require('express');
const router = express.Router();

router.post("/counter-json-rpc", (req, res) => {
    const {method, id, params} = req.body
    let result

    if (method === "increment") {
        result = params.value + 1
    } else if (method === "decrement") {
        result = params.value - 1
    } else if (method === "reset") {
        result = 0
    }

    res.json({id, result})
})

module.exports = router
