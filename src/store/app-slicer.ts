import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMock } from '../components/app/types';
import {Mocks } from '../components/app/mocks';

interface QuestsState {
  activeQuest: number,
  quests: IMock[],
  activeFilter: string,
  filteredQuests: IMock[],
}

/*
    adventures: IMock[] | IMock,
    horrors: IMock[] | IMock,
    mystic: IMock[] | IMock,
    detective: IMock[] | IMock,
    scifi: IMock[] | IMock,
* {
    adventures: getFilteredQuests('adventures', Mocks),
    horrors: getFilteredQuests('horror', Mocks),
    mystic: getFilteredQuests('mystic', Mocks),
    detective: getFilteredQuests('detective', Mocks),
    scifi: getFilteredQuests('scifi', Mocks),
  }*/

const initialState: QuestsState = {
  activeQuest: 0,
  quests: Mocks,
  activeFilter: 'allQuests',
  filteredQuests: Mocks,
}

export const questsSlice = createSlice({
  name: 'quests',
  initialState,
  reducers: {
    setActiveQuest: (state, action: PayloadAction<number>) => {
      state.activeQuest = action.payload;
    },
    setActiveFilter: (state, action: PayloadAction<string>) => {
      state.activeFilter = action.payload;
      if (state.activeFilter === 'allQuests') {
        state.filteredQuests = state.quests;
      } else {
        state.filteredQuests = state.quests.filter((quest) => quest.type === action.payload);
      }
    },
  }
});


export const {setActiveQuest, setActiveFilter} = questsSlice.actions;

export default questsSlice.reducer;
