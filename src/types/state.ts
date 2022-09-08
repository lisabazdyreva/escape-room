import { IMock } from './types';
import { RootState } from '../store/root-reducer';

export type AppData = {
  quests: IMock[],
  selectedQuest: IMock,
}

export type AppProcess = {
  filteredQuests: [],
  activeFilter: string,
}

export type State = RootState;
