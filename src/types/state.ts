import { FetchStatusGet, FetchStatusPost, IQuest } from './types';
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
  fetchStatusQuests: FetchStatusGet,
  fetchStatusDetailedQuest: FetchStatusGet,
  postOrderStatus: FetchStatusPost,
}

export type State = RootState;
