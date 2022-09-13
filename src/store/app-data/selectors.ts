import { NameSpace } from '../root-reducer';
import { IQuest } from '../../types/types';
import { State } from '../../types/state';


export const getSelectedQuest = (state: State): IQuest => {
  return state[NameSpace.data].selectedQuest;
}
