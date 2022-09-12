import {
  defaultString,
  defaultDuration,
  TypeDictionary,
  LevelDictionary,
  Duration
} from '../const';


export type QuestType = keyof typeof TypeDictionary | typeof defaultString;
export type LevelType = keyof typeof LevelDictionary | typeof defaultString;
export type DurationType = typeof defaultDuration | typeof Duration[keyof typeof Duration];


export interface IQuest {
  id: number,
  title: string,
  description: string,
  previewImg: string,
  coverImg: string,
  type: QuestType,
  level: LevelType,
  peopleCount: number[],
  duration: DurationType,
}

export interface IPostData {
  name: string,
  peopleCount: number,
  phone: string,
  isLegal: boolean
}
