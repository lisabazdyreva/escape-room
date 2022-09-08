import { NameSpace } from '../root-reducer';
import { State } from '../../types/state';

export const getFilteredQuests = (state: State):any => {
  return state[NameSpace.app].filteredQuests;
}

export const setActiveFilter = (state: State): string => {
  return state[NameSpace.app].activeFilter;
}
