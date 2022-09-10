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


const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/quest/:id">
            <DetailedQuest />
          </Route>
          <Route exact path="/contacts">
            <Contacts />
          </Route>
          <Route exact path="/" >
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
