import {Action} from 'redux';
import { ThunkAction} from '@reduxjs/toolkit';
import { State } from './state';


export enum ActionType {
  GetQuests = 'data/getQuests',
  GetSelectedQuest = 'data/getSelectedQuest',
  GetFilteredQuests = 'app/getFilteredQuests',
  SetActiveFilter = 'app/setActiveFilter'
}
export type ThunkActionResult<P = Promise<void>> = ThunkAction<P, State, unknown, Action>;
