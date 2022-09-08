import { createReducer } from '@reduxjs/toolkit';

import { getQuests, getSelectedQuest } from '../actions/actions';
import { AppData } from '../../types/state';
import { IMock } from '../../types/types';

const initialQuest: IMock = {
  id: 0,
  title: '',
  description: '',
  previewImg: '',
  coverImg: '',
  type: '',
  level: '',
  peopleCount: [0, 0],
  duration: 0,
};

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


