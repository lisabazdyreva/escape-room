export enum TypesDictionary {
  adventure = 'Приключения',
  horror = 'Ужасы',
  mystic = 'Мистика',
  detective = 'Детектив',
  scifi = 'Sci-fi',
}

export enum LevelsDictionary {
  easy = 'простой',
  medium = 'средний',
  hard = 'сложный',
}

export type Durations = 0 | 60 | 90 | 120;

export interface IQuest {
  id: number,
  title: string,
  description: string,
  previewImg: string,
  coverImg: string,
  type: TypesDictionary | string,
  level: LevelsDictionary | string,
  peopleCount: number[],
  duration: Durations,
}

export enum BookingFields {
  NAME = 'name',
  PHONE = 'phone',
  PEOPLE = 'people',
}
