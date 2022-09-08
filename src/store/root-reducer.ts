import { combineReducers } from '@reduxjs/toolkit';

import {appData} from './app-data/app-data';
import {appProcess} from './app-process/app-process';

export enum NameSpace {
  data = 'Data',
  status = 'Status',
  app = 'App',
}

export const rootReducer = combineReducers({
  [NameSpace.data]: appData,
  [NameSpace.app]: appProcess,
  // [NameSpace.status]: appStatus,
});


export type RootState = ReturnType<typeof rootReducer>;
