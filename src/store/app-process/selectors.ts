import { NameSpace } from '../root-reducer';
import { State } from '../../types/state';
import { IQuest } from '../../types/types';

export const setInitialFilteredQuests = (state: State): IQuest[] => {
  return state[NameSpace.app].initialFilteredQuests;
}

export const getFilteredQuests = (state: State): IQuest[] => {
  return state[NameSpace.app].filteredQuests;
}

export const setActiveFilter = (state: State): string => {
  return state[NameSpace.app].activeFilter;
}
