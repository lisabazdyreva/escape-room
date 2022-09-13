import { IQuest } from './types';
import { FetchStatus, FilterDictionary } from '../const';
import { RootState } from '../store/root-reducer';


export type AppData = {
  quests: IQuest[],
  selectedQuest: IQuest,
}

export type AppProcess = {
  initialFilteredQuests:  IQuest[] | [],
  filteredQuests: IQuest[],
  activeFilter: keyof typeof FilterDictionary,
}

export type AppStatus = {
  fetchStatusQuests: FetchStatus,
  fetchStatusDetailedQuest: FetchStatus,
  postOrderStatus: FetchStatus,
}

export type State = RootState;
