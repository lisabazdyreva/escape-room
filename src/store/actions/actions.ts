import { createAction } from '@reduxjs/toolkit';

import {ActionType} from '../../types/action';
import { FetchStatusGet, FetchStatusPost, IQuest } from '../../types/types';

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
  (status: FetchStatusGet) => ({
    payload: status,
  })
)


export const setFetchStatusDetailedQuest = createAction(
  ActionType.SetFetchStatusDetailedQuest,
  (status: FetchStatusGet) => ({
    payload: status,
  })
)

export const setPostOrderStatus = createAction(
  ActionType.SetPostOrderStatus,
  (status: FetchStatusPost) => ({
    payload: status,
  })
)
