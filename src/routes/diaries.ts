import express from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils'

const router = express.Router()

router.get('/', (_, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)
  return diary !== null ? res.send(diary) : res.status(404).send('Not found')
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)
    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)
    console.log(addedDiaryEntry)
    res.send('<h1>POST DIARY</h1>')
  } catch (e) {
    res.status(400).send(e)
  }
})

export default router
