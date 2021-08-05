import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

//instances
const server = express()

// middlewares
server.use(cors({ origin: '*' }))
server.use(morgan('common'))
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

// export
export default server
