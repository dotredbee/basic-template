const express = require('express')
const app = express()
const server = require('./loader')(app)

const port = app.get('port')

server.listen(port, () => {
    console.log(`started server...${port}`)
})