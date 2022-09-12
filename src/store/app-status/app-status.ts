import { AppStatus } from '../../types/state';
import { createReducer } from '@reduxjs/toolkit';
import { setFetchStatusDetailedQuest, setFetchStatusQuests, setPostOrderStatus } from '../actions/actions';

import { FetchStatusGet, FetchStatusPost } from '../../types/types';

const initialState: AppStatus = {
  fetchStatusQuests: FetchStatusGet.Default,
  fetchStatusDetailedQuest: FetchStatusGet.Default,
  postOrderStatus: FetchStatusPost.Default,
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
