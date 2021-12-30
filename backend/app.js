import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'

import authRoutes from './routes/auth.js'
import taskRoutes from './routes/tasks.js'

const app = express()
dotenv.config()

// database connection
main().catch((err) => console.log(err))
async function main() {
  await mongoose.connect(process.env.DATABASE_URL)
}

// middlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

// routes
app.use('/api/auth', authRoutes)
app.use('/api/recipes', taskRoutes)

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is listening on port ${process.env.APP_PORT}`)
})
