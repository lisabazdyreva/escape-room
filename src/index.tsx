import { StrictMode } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { rootReducer } from './store/root-reducer';
import { downloadQuests } from './utils/utils';

import App from './components/app/app';


export const store = configureStore({
  reducer: rootReducer,
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
