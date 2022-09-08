import { createAction } from '@reduxjs/toolkit';

import {ActionType} from '../../types/action';
import { IMock } from '../../types/types';

export const getQuests = createAction(
  ActionType.GetQuests,
  (quests: IMock[]) => ({
    payload: quests,
  }),
);

export const getSelectedQuest = createAction(
  ActionType.GetSelectedQuest,
  (quest: IMock) => ({
    payload: quest,
  }),
);

export const getFilteredQuests = createAction(
  ActionType.GetFilteredQuests,
  (type: string) => ({
    payload: type,
  })
)

export const setActiveFilter = createAction(
  ActionType.SetActiveFilter,
  (type: string) => ({
    payload: type,
  })
)
