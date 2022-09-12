import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';
import { FetchStatusGet, FetchStatusPost } from '../../types/types';

export const setFetchStatusQuests = (state: State): FetchStatusGet => {
  return state[NameSpace.status].fetchStatusQuests;
}

export const setFetchStatusDetailedQuest = (state: State): FetchStatusGet => {
  return state[NameSpace.status].fetchStatusDetailedQuest;
}


export const setPostOrderStatus = (state: State): FetchStatusPost => {
  return state[NameSpace.status].postOrderStatus;
}
