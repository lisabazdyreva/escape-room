import { createAction } from '@reduxjs/toolkit';

import {ActionType} from '../../types/action';
import { IQuest } from '../../types/types';

export const getQuests = createAction(
  ActionType.GetQuests,
  (quests: IQuest[]) => ({
    payload: quests,
  }),
);

export const getSelectedQuest = createAction(
  ActionType.GetSelectedQuest,
  (quest: IQuest) => ({
    payload: quest,
  }),
);

export const setInitialFilteredQuests = createAction(
  ActionType.SetInitialFilteredQuests,
  (quests: IQuest[]) => ({
    payload: quests,
  })
)

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

export const setFetchStatusQuests = createAction(
  ActionType.SetFetchStatusQuests,
  (status: 'trying' | 'success' | 'error') => ({
    payload: status,
  })
)


export const setFetchStatusDetailedQuest = createAction(
  ActionType.SetFetchStatusDetailedQuest,
  (status: 'trying' | 'success' | 'error') => ({
    payload: status,
  })
)

export const setPostOrderStatus = createAction(
  ActionType.SetPostOrderStatus,
  (status: 'trying' | 'success' | 'error' | 'default') => ({
    payload: status,
  })
)
