import { AppStatus } from '../../types/state';
import { createReducer } from '@reduxjs/toolkit';
import { setFetchStatusDetailedQuest, setFetchStatusQuests, setPostOrderStatus } from '../actions/actions';

import { FetchStatus } from '../../const';

const initialState: AppStatus = {
  fetchStatusQuests: FetchStatus.Default,
  fetchStatusDetailedQuest: FetchStatus.Default,
  postOrderStatus: FetchStatus.Default,
}

export const appStatus = createReducer(initialState, builder => {
  builder
    .addCase(setFetchStatusQuests, (state, action) => {
      state.fetchStatusQuests = action.payload;
    })
    .addCase(setFetchStatusDetailedQuest, (state, action) => {
      state.fetchStatusDetailedQuest = action.payload;
    })
    .addCase(setPostOrderStatus, (state, action) => {
      state.postOrderStatus = action.payload;
    })
})
