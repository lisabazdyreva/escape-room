import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';
import { FetchStatus } from '../../const';


export const setFetchStatusQuests = (state: State): FetchStatus => {
  return state[NameSpace.status].fetchStatusQuests;
}

export const setFetchStatusDetailedQuest = (state: State): FetchStatus => {
  return state[NameSpace.status].fetchStatusDetailedQuest;
}

export const setPostOrderStatus = (state: State): FetchStatus => {
  return state[NameSpace.status].postOrderStatus;
}
