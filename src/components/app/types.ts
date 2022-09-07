export enum Types {
  adventure = 'Приключения',
  horror = 'Ужасы',
  mystic = 'Мистика',
  detective = 'Детектив',
  scifi = 'Sci-fi',
}

export enum Levels {
  easy = 'простой',
  middle = 'средний',
  hard = 'сложный',
}

export type Durations = 60 | 90 | 120;

export interface IMock {
  id: number,
  title: string,
  description: string,
  previewImg: string,
  coverImg: string,
  type: Types | string,
  level: Levels | string,
  peopleCount: number[],
  duration: Durations,
}


