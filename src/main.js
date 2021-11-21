// @ts-check

const express = require('express')
const fs = require('fs')

const app = express()

const PORT = 4000

app.use('/', async (req, res, next) => {
    console.log('Middleware 1-1')

    const requestedAt = new Date()
    const fileContent = await fs.promises.readFile('.gitignore')
    // @ts-ignore
    req.requestedAt = requestedAt
    // @ts-ignore
    req.fileContent = fileContent
    setTimeout(() => {
        next()
    }, 1000)
    },
    (req, res, next) => {
      console.log('Middleware 1-2')
      next()
    })

app.use((req, res) => {
    console.log('Middleware 2')
    res.send(`Hello, express!: Requested at ${req.requestedAt}, ${req.fileContent}`)
})

app.listen(PORT, () => {
    console.log(`The Express server iss listening at port: ${PORT}`)
})