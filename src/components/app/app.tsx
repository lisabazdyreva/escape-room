import { ThemeProvider} from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from '../common/common';

import DetailedQuest from '../detailed-quest/detailed-quest';
import Contacts from '../contacts/contacts';
import Home from '../home/home';
import NotFoundPage from '../not-found-page/not-found-page';

import { appTheme } from './common';
import * as S from './app.styled';

import { AppRoute } from '../../const';


const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Router>
        <Switch>
          <Route exact path={`${AppRoute.DetailedQuest}:id`}>
            <DetailedQuest />
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
