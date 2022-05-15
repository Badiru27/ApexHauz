const express = require('express')
const app = express()

app.get('/api', (req, res) => {
    res.json(
        {
            success: 1,
            message: 'Hello Group 30'
        }
    )
})

app.listen(3000)