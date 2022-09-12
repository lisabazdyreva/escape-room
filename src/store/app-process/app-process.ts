import { createReducer } from '@reduxjs/toolkit';
import { getFilteredQuests, setActiveFilter, setInitialFilteredQuests } from '../actions/actions';
import { AppProcess } from '../../types/state';

import { DEFAULT_FILTER } from '../../const';
import { getQuestsByFilter } from '../../utils/utils';


const initialState: AppProcess = {
  initialFilteredQuests: [],
  filteredQuests: [],
  activeFilter: DEFAULT_FILTER,
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
      state.filteredQuests = action.payload === DEFAULT_FILTER
        ? state.initialFilteredQuests
        : getQuestsByFilter(state.initialFilteredQuests, action.payload);
    })
});
