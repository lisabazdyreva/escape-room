import { ThunkActionResult } from '../../types/action';
import {
  getQuests,
  getSelectedQuest,
  setFetchStatusDetailedQuest,
  setFetchStatusQuests,
  setInitialFilteredQuests, setPostOrderStatus,
} from './actions';

import { BaseUrl, FetchStatus, RESPONSE_POST_SUCCESS } from '../../const';
import { IPostData } from '../../types/types';
import { getSettingsObject } from '../../utils/utils';


export const fetchQuests = function() :ThunkActionResult {
  return async (dispatch, _getState): Promise<void> => {
    dispatch(setFetchStatusQuests(FetchStatus.Trying))
     await fetch(BaseUrl.Get)
       .then((response) => {
         if (response.ok) {
           return response.json();
         }
       })
       .then((data) => {
         dispatch(getQuests(data));
         dispatch(setInitialFilteredQuests(data));
       })
       .then(() => {
         dispatch(setFetchStatusQuests(FetchStatus.Success));
       })
      .catch(() => dispatch(setFetchStatusQuests(FetchStatus.Error)));
  }
}

export const fetchQuest = function( id: number) :ThunkActionResult {
  return async (dispatch, _getState): Promise<void> => {
    dispatch(setFetchStatusDetailedQuest(FetchStatus.Trying))
    await fetch(`${BaseUrl.Get}/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        dispatch(getSelectedQuest(data));
      })
      .catch(() => dispatch(setFetchStatusDetailedQuest(FetchStatus.Error)));
  }
}

export const postOrder = function(data: IPostData) :ThunkActionResult {
  return async (dispatch, _getState): Promise<void> => {
    dispatch(setPostOrderStatus(FetchStatus.Trying));
    const settingsObject = getSettingsObject(data);

    await fetch(BaseUrl.Post, settingsObject)
      .then((response) => response.json())
      .then((status) => {
        if (status === RESPONSE_POST_SUCCESS) {
          dispatch(setPostOrderStatus(FetchStatus.Success));
        }
      })
      .catch(() => dispatch(setPostOrderStatus(FetchStatus.Error)));
  }
}
