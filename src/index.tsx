import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './components/app/app';

import { Provider } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './store/root-reducer';
import { downloadQuests } from './utils/utils';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    thunk: {
      extraArgument: null,
    }
  })
});

downloadQuests();

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
document.getElementById('root'),
);
