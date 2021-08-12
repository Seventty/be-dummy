const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

//instances
const server = express()

// middlewares
server.use(cors({ origin: '*' }))
server.use(morgan('common'))
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

// export
module.exports = { server }
