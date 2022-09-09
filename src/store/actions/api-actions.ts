import { ThunkActionResult } from '../../types/action';
import {
  getQuests,
  getSelectedQuest,
  setFetchStatusDetailedQuest,
  setFetchStatusQuests,
  setInitialFilteredQuests,
} from './actions';

const URI = 'http://localhost:3001/quests';
const fetchQuests = function() :ThunkActionResult {
  return async (dispatch, _getState): Promise<void> => {
     await fetch(URI)
       .then((response) => {
         if (response.ok) {
           return response.json();
         } else {
           throw new Error('err');
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
    await fetch(`${URI}/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('err');
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
    await fetch('http://localhost:3001/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === 201) {
          console.log('success');
        } else {
          throw new Error('err');
        }
      })
      .catch((err) => console.log(err));
  }
}

export {fetchQuests, fetchQuest, postOrder};


