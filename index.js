require('dotenv').config()
const path = require('path')
const cors = require('cors')

console.log(process.argv[3])
console.log(process.env.USER) // in heroku the PORT lives in the env
console.log(process.env.FOO)

const express = require('express')

const server = express()
server.use(express.json())
server.use(cors())
server.use(express.static(
    path.join(__dirname,'client/build' )
))


server.get('/hello', (req, res) => {
    res.send('<h1>Hello There!</h2>')
})

server.get('*', (req, res) => {
    res.sendFile(
        path.join(__dirname, 'client/build, index.html')
    )
})


const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log(`listening on ${port}`)
})