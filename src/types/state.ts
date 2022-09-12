import { IQuest } from './types';
import { FetchStatus } from '../const';
import { RootState } from '../store/root-reducer';

export type AppData = {
  quests: IQuest[],
  selectedQuest: IQuest,
}

export type AppProcess = {
  initialFilteredQuests:  IQuest[] | [],
  filteredQuests: IQuest[],
  activeFilter: string,
}

export type AppStatus = {
  fetchStatusQuests: FetchStatus,
  fetchStatusDetailedQuest: FetchStatus,
  postOrderStatus: FetchStatus,
}

export type State = RootState;
