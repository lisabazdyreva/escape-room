import { createReducer } from '@reduxjs/toolkit';

import { getFilteredQuests, setActiveFilter, setInitialFilteredQuests } from '../actions/actions';
import { AppProcess } from '../../types/state';
import { IQuest } from '../../types/types';


const initialState: AppProcess = { //import { AppProcess } from '../../types/state';
  initialFilteredQuests: [],
  filteredQuests: [],
  activeFilter: 'allQuests',
}

export const appProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(setInitialFilteredQuests, (state, action) => {
      state.initialFilteredQuests = action.payload;
      state.filteredQuests = state.initialFilteredQuests;
    })
    .addCase(setActiveFilter, (state, action) => {
      state.activeFilter = action.payload;
    })
    .addCase(getFilteredQuests, (state, action) => {
      state.filteredQuests = action.payload === 'allQuests'
        ? state.initialFilteredQuests
        : state.initialFilteredQuests.filter((quest: IQuest) => quest.type === action.payload);
    })
});
