import { IQuest } from './types';
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
  fetchStatusQuests: 'trying' | 'success' | 'error',
  fetchStatusDetailedQuest: 'trying' | 'success' | 'error',
  postOrderStatus: 'trying' | 'success' | 'error' | 'default',
}

export type State = RootState;
