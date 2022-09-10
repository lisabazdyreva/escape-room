import React from 'react';

import * as S from './quests-catalog.styled';
import QuestsFilter from '../quests-filter/quests-filter';
import QuestItem from '../quest-item/quest-item';

import { useSelector } from 'react-redux';
import { getFilteredQuests } from '../../../../store/app-process/selectors';
import { setFetchStatusQuests } from '../../../../store/app-status/selectors';
import Loading from '../../../loading/loading';



const QuestsCatalog: React.FC = () => {
  const filteredQuests = useSelector(getFilteredQuests);
  const fetchStatusQuests = useSelector(setFetchStatusQuests);

  const isTrying = fetchStatusQuests === 'trying';
  const isSuccess = fetchStatusQuests === 'success';
  const isError = fetchStatusQuests === 'error';

  return (
    <>
      <QuestsFilter  />
      { isTrying &&
        <Loading />
      }
      { isSuccess &&
        <S.QuestsList>
          { filteredQuests.map((quest) => <QuestItem key={quest.id} quest={quest} />) }
        </S.QuestsList>
      }

      { isError && <div>Произошла ошибка, попробуйте позже.</div> }
    </>
  );
}

export default QuestsCatalog;
