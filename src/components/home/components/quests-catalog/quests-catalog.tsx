import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './quests-catalog.styled';

import { getFilteredQuests } from '../../../../store/app-process/selectors';
import { QuestItem } from '../components';


const QuestsCatalog = () => {
  const filteredQuests = useSelector(getFilteredQuests);
  return (
    <S.QuestsList>
      { filteredQuests.map((quest) => <QuestItem key={quest.id} quest={quest} />) }
    </S.QuestsList>
  );
}

export default QuestsCatalog;
