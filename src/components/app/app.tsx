import { ThemeProvider} from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from '../common/common';

import Contacts from '../contacts/contacts';
import Home from '../home/home';
import NotFoundPage from '../not-found-page/not-found-page';

import { appTheme } from './common';
import * as S from './app.styled';

import { AppRoute } from '../../const';
import DetailedPage from '../detailed-page/detailed-page';


const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Router>
        <Switch>
          <Route exact path={`${AppRoute.DetailedQuest}:id`}>
            <DetailedPage />
          </Route>
          <Route exact path={AppRoute.Contacts}>
            <Contacts />
          </Route>
          <Route exact path={AppRoute.Home} >
            <Home />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
