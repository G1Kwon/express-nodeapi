// @ts-check

const express = require('express')

const app = express()

const PORT = 4000

app.use('/', (req, res) => {
    res.send('Hello, express!')
})

app.listen(PORT, () => {
    console.log(`The Express server iss listening at port: ${PORT}`)
})