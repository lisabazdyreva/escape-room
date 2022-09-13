import { createReducer } from '@reduxjs/toolkit';

import { getFilteredQuests, setActiveFilter, setInitialFilteredQuests } from '../actions/actions';
import { AppProcess } from '../../types/state';

import { DefaultQuestValue, FilterDictionary } from '../../const';


const initialState: AppProcess = {
  initialFilteredQuests: [],
  filteredQuests: [],
  activeFilter: DefaultQuestValue.Filter,
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
      state.filteredQuests = action.payload === DefaultQuestValue.Filter
        ? state.initialFilteredQuests
        : state.initialFilteredQuests.filter((quest) => {
          const type = (quest.type[0].toUpperCase() + quest.type.slice(1)) as keyof typeof FilterDictionary;
          return type === action.payload;
        });
    })
});
