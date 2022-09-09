import { ThunkActionResult } from '../../types/action';
import { getQuests, getSelectedQuest, setInitialFilteredQuests } from './actions';

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
      .catch((err) => console.log(err));
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
      .catch((err) => console.log(err));
  }
}

export {fetchQuests, fetchQuest};


