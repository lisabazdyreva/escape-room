import React from 'react';

import * as S from './quests-catalog.styled';
import {QuestItem} from '../components';

import { useSelector } from 'react-redux';
import { getFilteredQuests } from '../../../../store/app-process/selectors';



const QuestsCatalog: React.FC = () => {
  const filteredQuests = useSelector(getFilteredQuests);
  return (
    <S.QuestsList>
      { filteredQuests.map((quest) => <QuestItem key={quest.id} quest={quest} />) }
    </S.QuestsList>
  );
}

export default QuestsCatalog;
