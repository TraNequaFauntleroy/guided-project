require('dotenv').config()

console.log('web 46 rules')
console.log(process.argv[2])
console.log(process.argv[3])
console.log(process.env.USER) // in heroku the PORT lives in the env
console.log(process.env.FOO)

const express = require('express')

const server = express()
server.use(express.json())

server.get('/hello', (req, res) => {
    res.send('<h1>Hello There!</h2>')
})


const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log(`listening on ${port}`)
})