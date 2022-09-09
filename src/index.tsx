import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './components/app/app';

import { Provider } from 'react-redux';

import { fetchQuests } from './store/actions/api-actions';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './store/root-reducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    thunk: {
      extraArgument: null,
    }
  })
});

store.dispatch(fetchQuests());

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
document.getElementById('root'),
);
