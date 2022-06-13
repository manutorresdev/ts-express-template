export enum Weather {
  Sunny = 'sunny',
  Cloudy = 'cloudy',
  Rainy = 'rainy',
  Snowy = 'snowy'
}

export enum Visibility {
  Good = 'good',
  Bad = 'bad',
  Poor = 'poor',
  Ok = 'ok'
}

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// Utilizar la misma interfaz pero con otros campos
// 1
// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>
// 2
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
// Extending new properties to interface
// interface SpecialDiaryEntry extends DiaryEntry {
//     flightNumber: number
// }
