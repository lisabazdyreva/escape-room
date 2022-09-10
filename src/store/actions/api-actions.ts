import { ThunkActionResult } from '../../types/action';
import {
  getQuests,
  getSelectedQuest,
  setFetchStatusDetailedQuest,
  setFetchStatusQuests,
  setInitialFilteredQuests, setPostOrderStatus,
} from './actions';

import { URI_POST, URI_GET } from '../../const';

const fetchQuests = function() :ThunkActionResult {
  return async (dispatch, _getState): Promise<void> => {
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
         dispatch(setFetchStatusQuests('success'));
       })
      .catch(() => dispatch(setFetchStatusQuests('error')));
  }
}

const fetchQuest = function( id: number) :ThunkActionResult {
  return async (dispatch, _getState): Promise<void> => {
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
        dispatch(setFetchStatusDetailedQuest('success'));
      })
      .catch(() => dispatch(setFetchStatusDetailedQuest('error')));
  }
}

const postOrder = function(data: {name: string, peopleCount: number, phone: string, isLegal: boolean}) :ThunkActionResult {
  return async (dispatch, _getState): Promise<void> => {
    dispatch(setPostOrderStatus('trying'));
    await fetch(URI_POST, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === 201) {
          dispatch(setPostOrderStatus('success'));
        } else {
          throw new Error();
        }
      })
      .catch(() => dispatch(setPostOrderStatus('error')));
  }
}

export {fetchQuests, fetchQuest, postOrder};


