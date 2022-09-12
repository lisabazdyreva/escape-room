import { ThunkActionResult } from '../../types/action';
import {
  getQuests,
  getSelectedQuest,
  setFetchStatusDetailedQuest,
  setFetchStatusQuests,
  setInitialFilteredQuests, setPostOrderStatus,
} from './actions';

import { URI_POST, URI_GET } from '../../const';
import { FetchStatusGet, FetchStatusPost, IPostData } from '../../types/types';
import { getSettingsObject } from '../../utils/utils';

const fetchQuests = function() :ThunkActionResult {
  return async (dispatch, _getState): Promise<void> => {
    dispatch(setFetchStatusQuests(FetchStatusGet.Trying))
     await fetch(URI_GET)
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
         dispatch(setFetchStatusQuests(FetchStatusGet.Success));
       })
      .catch(() => dispatch(setFetchStatusQuests(FetchStatusGet.Error)));
  }
}

const fetchQuest = function( id: number) :ThunkActionResult {
  return async (dispatch, _getState): Promise<void> => {
    dispatch(setFetchStatusDetailedQuest(FetchStatusGet.Trying))
    await fetch(`${URI_GET}/${id}`)
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
        dispatch(setFetchStatusDetailedQuest(FetchStatusGet.Success));
      })
      .catch(() => dispatch(setFetchStatusDetailedQuest(FetchStatusGet.Error)));
  }
}

const postOrder = function(data: IPostData) :ThunkActionResult {
  return async (dispatch, _getState): Promise<void> => {
    dispatch(setPostOrderStatus(FetchStatusPost.Trying));
    const settingsObject = getSettingsObject(data);

    await fetch(URI_POST, settingsObject)
      .then((response) => response.json())
      .then((data) => {
        if (data === 201) {
          dispatch(setPostOrderStatus(FetchStatusPost.Success));
        } else {
          throw new Error();
        }
      })
      .catch(() => dispatch(setPostOrderStatus(FetchStatusPost.Error)));
  }
}

export {fetchQuests, fetchQuest, postOrder};


