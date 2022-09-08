import { NameSpace } from '../root-reducer';
import { IMock } from '../../types/types';
import { State } from '../../types/state';


export const getQuests = (state: State): IMock[] =>   {
  return state[NameSpace.data].quests;
}

export const getSelectedQuest = (state: State): IMock => {
  return state[NameSpace.data].selectedQuest;
}
