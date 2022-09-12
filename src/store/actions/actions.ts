import { createAction } from '@reduxjs/toolkit';

import {ActionType} from '../../types/action';
import { IQuest } from '../../types/types';
import { FetchStatus } from '../../const';

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
  (status: FetchStatus) => ({
    payload: status,
  })
)


export const setFetchStatusDetailedQuest = createAction(
  ActionType.SetFetchStatusDetailedQuest,
  (status: FetchStatus) => ({
    payload: status,
  })
)

export const setPostOrderStatus = createAction(
  ActionType.SetPostOrderStatus,
  (status: FetchStatus) => ({
    payload: status,
  })
)
