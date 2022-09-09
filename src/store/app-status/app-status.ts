import { AppStatus } from '../../types/state';
import { createReducer } from '@reduxjs/toolkit';
import { setFetchStatusDetailedQuest, setFetchStatusQuests } from '../actions/actions';

const initialState: AppStatus = {
  fetchStatusQuests: 'trying',
  fetchStatusDetailedQuest: 'trying',
}

export const appStatus = createReducer(initialState, builder => {
  builder
    .addCase(setFetchStatusQuests, (state, action) => {
      state.fetchStatusQuests = action.payload;
    })
    .addCase(setFetchStatusDetailedQuest, (state, action) => {
      state.fetchStatusDetailedQuest = action.payload;
    })
})
