import React from 'react';

import * as S from './quests-catalog.styled';
import QuestsFilter from '../quests-filter/quests-filter';
import QuestItem from '../quest-item/quest-item';

import { useSelector } from 'react-redux';
import { getFilteredQuests } from '../../../../store/app-process/selectors';
import { setFetchStatusQuests } from '../../../../store/app-status/selectors';
import Loading from '../../../loading/loading';
import { FetchStatusGet } from '../../../../types/types';

import { TextMessages } from '../../../../const';

import { downloadQuests } from '../../../../utils/utils';


const QuestsCatalog: React.FC = () => {
  const filteredQuests = useSelector(getFilteredQuests);
  const fetchStatusQuests = useSelector(setFetchStatusQuests);

  return (
    <>
      <QuestsFilter  />
      { fetchStatusQuests === FetchStatusGet.Trying && <Loading /> }
      { fetchStatusQuests === FetchStatusGet.Success &&
        <S.QuestsList>
          { filteredQuests.map((quest) => <QuestItem key={quest.id} quest={quest} />) }
        </S.QuestsList>
      }

      { fetchStatusQuests === FetchStatusGet.Error && <div>{ TextMessages.Error } <button onClick={downloadQuests}>Попробовать снова</button></div> }
    </>
  );
}

export default QuestsCatalog;
