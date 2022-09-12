import { NameSpace } from '../root-reducer';
import { State } from '../../types/state';
import { IQuest } from '../../types/types';
import { FilterDictionary } from '../../const';

export const setInitialFilteredQuests = (state: State): IQuest[] => {
  return state[NameSpace.app].initialFilteredQuests;
}

export const getFilteredQuests = (state: State): IQuest[] => {
  return state[NameSpace.app].filteredQuests;
}

export const setActiveFilter = (state: State): keyof typeof FilterDictionary => {
  return state[NameSpace.app].activeFilter;
}
