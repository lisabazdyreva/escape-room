import {Action} from 'redux';
import { ThunkAction} from '@reduxjs/toolkit';
import { State } from './state';


export enum ActionType {
  GetQuests = 'data/getQuests',
  GetSelectedQuest = 'data/getSelectedQuest',
  GetFilteredQuests = 'app/getFilteredQuests',
  SetInitialFilteredQuests = 'app/setInitialFilteredQuests',
  SetActiveFilter = 'app/setActiveFilter',
  SetFetchStatusQuests = 'status/setFetchStatusQuests',
  SetFetchStatusDetailedQuest = 'status/setFetchStatusDetailedQuest',
  SetPostOrderStatus = 'status/setPostOrderStatus'
}
export type ThunkActionResult<P = Promise<void>> = ThunkAction<P, State, unknown, Action>;
// TODO unknown
