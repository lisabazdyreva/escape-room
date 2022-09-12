import { ThunkActionResult } from '../../types/action';
import {
  getQuests,
  getSelectedQuest,
  setFetchStatusDetailedQuest,
  setFetchStatusQuests,
  setInitialFilteredQuests, setPostOrderStatus,
} from './actions';

import { BaseUrl, FetchStatus } from '../../const';
import { IPostData } from '../../types/types';
import { getSettingsObject } from '../../utils/utils';

const fetchQuests = function() :ThunkActionResult {
  return async (dispatch, _getState): Promise<void> => {
    dispatch(setFetchStatusQuests(FetchStatus.Trying))
     await fetch(BaseUrl.Get)
       .then((response) => {
         if (response.ok) {
           return response.json();
         } else {
           throw new Error();
         }
       })
       .then((result) => {
         dispatch(getQuests(result));
         dispatch(setInitialFilteredQuests(result));
       })
       .then(() => {
         dispatch(setFetchStatusQuests(FetchStatus.Success));
       })
      .catch(() => dispatch(setFetchStatusQuests(FetchStatus.Error)));
  }
}

const fetchQuest = function( id: number) :ThunkActionResult {
  return async (dispatch, _getState): Promise<void> => {
    dispatch(setFetchStatusDetailedQuest(FetchStatus.Trying))
    await fetch(`${BaseUrl.Get}/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error();
        }
      })
      .then((result) => {
        dispatch(getSelectedQuest(result));
      })
      .then(() => {
        dispatch(setFetchStatusDetailedQuest(FetchStatus.Success));
      })
      .catch(() => dispatch(setFetchStatusDetailedQuest(FetchStatus.Error)));
  }
}

const postOrder = function(data: IPostData) :ThunkActionResult {
  return async (dispatch, _getState): Promise<void> => {
    dispatch(setPostOrderStatus(FetchStatus.Trying));
    const settingsObject = getSettingsObject(data);

    await fetch(BaseUrl.Post, settingsObject)
      .then((response) => response.json())
      .then((data) => {
        if (data === 201) {
          dispatch(setPostOrderStatus(FetchStatus.Success));
        } else {
          throw new Error();
        }
      })
      .catch(() => dispatch(setPostOrderStatus(FetchStatus.Error)));
  }
}

export {fetchQuests, fetchQuest, postOrder};


