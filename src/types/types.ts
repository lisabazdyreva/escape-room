import {
  TypeDictionary,
  LevelDictionary,
  Duration, DefaultQuestValue,
} from '../const';


export type QuestType = keyof typeof TypeDictionary | typeof DefaultQuestValue.Empty;
export type LevelType = keyof typeof LevelDictionary | typeof DefaultQuestValue.Empty;
export type DurationType = typeof Duration[keyof typeof Duration] | typeof DefaultQuestValue.Duration;


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
