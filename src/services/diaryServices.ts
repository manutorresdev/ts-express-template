import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry, Visibility, Weather } from '../types'

const diaries: DiaryEntry[] = [{
  id: 1,
  date: '2020-01-01',
  weather: Weather.Sunny,
  visibility: Visibility.Good,
  comment: 'This is a comment'
}]

export const getEntries = (): DiaryEntry[] => {
  return diaries
}

export const findById = (id: number): DiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)
  return entry
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, visibility, weather }) => {
    return { id, date, visibility, weather }
  })
}

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: diaries.length + 1,
    ...newDiaryEntry
  }

  diaries.push(newDiary)

  return newDiary
}
