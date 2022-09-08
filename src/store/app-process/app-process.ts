import { createReducer } from '@reduxjs/toolkit';

import { getFilteredQuests, setActiveFilter } from '../actions/actions';
import { AppProcess } from '../../types/state';


const initialState: AppProcess = { //import { AppProcess } from '../../types/state';
  filteredQuests: [],
  activeFilter: 'allQuests',
}

export const appProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(getFilteredQuests, (state) => {
      state.filteredQuests = [];
      //state.quests.filter((quest: IMock) => quest.type === action.payload)
    })
    .addCase(setActiveFilter, (state, action) => {
      state.activeFilter = action.payload;

      // if (state.activeFilter === 'allQuests') {
      //   state.filteredQuests = []; // state.quests
      // } else {
      //   state.filteredQuests = []; //state.quests.filter((quest: IMock) => quest.type === state.activeFilter);
      // }
    })
});
