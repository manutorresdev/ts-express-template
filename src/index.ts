import express from 'express'
import diaryRouter from './routes/diaries'

const app = express()

app.use(express.json()) // for parsing application/json

const PORT = 4000

app.get('/ping', (_, res) => {
  console.log('PING')
  res.send('<h1>PONG</h1>')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
