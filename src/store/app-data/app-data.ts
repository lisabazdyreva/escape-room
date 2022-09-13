import { createReducer } from '@reduxjs/toolkit';

import { getQuests, getSelectedQuest } from '../actions/actions';
import { AppData } from '../../types/state';

import { initialQuest } from '../../const';


const initialState: AppData = {
  quests: [],
  selectedQuest: initialQuest,
}


export const appData = createReducer(initialState, (builder) => {
  builder
    .addCase(getQuests, (state, action) => {
      state.quests = action.payload;
    })
    .addCase(getSelectedQuest, (state, action) => {
      state.selectedQuest = action.payload
    })
});
