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

import {Types, Levels, IMock} from './types';

import { appTheme } from './common';
import * as S from './app.styled';
import { getValue } from './utils';

const eng_types = Object.keys(Types);
const rus_types = Object.values(Types);

const eng_levels = Object.keys(Levels);
const rus_levels = Object.values(Levels);

const Mock: IMock = {
    "id": 1,
    "title": "Склеп",
    "description": "Средневековое кладбище таит в себе много страшных тайн. Местные жители говорят, что в склепе похоронен граф вампир, который по ночам выходит на охоту, чтобы испить человеческой крови. Через час солнце опустится за горизонт, успеете ли вы убить вампира и выбраться из склепа?",
    "previewImg": "img/preview-sklep.jpg",
    "coverImg": "img/cover-sklep.jpg",
    "type": getValue('type', eng_types, rus_types),
    "level": getValue('level', eng_levels, rus_levels),
    "peopleCount": [2, 5],
    "duration": 120
  };


const App = () => {

  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/quest/:id">
            <DetailedQuest quest={Mock}/>
          </Route>
          <Route exact path="/contacts">
            <Contacts />
          </Route>
          <Route path="/" exact>
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
