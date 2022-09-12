export enum TypesDictionary {
  adventures = 'Приключения',
  horror = 'Ужасы',
  mystic = 'Мистика',
  detective = 'Детектив',
  'sci-fi' = 'Sci-fi',
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

export enum FetchStatusGet {
  Trying = 'trying',
  Success = 'success',
  Error = 'error',
  Default = 'default',
}

export enum FetchStatusPost {
  Trying = 'trying',
  Success = 'success',
  Error = 'error',
  Default = 'default',
}


export interface IPostData {
  name: string,
  peopleCount: number,
  phone: string,
  isLegal: boolean
}
