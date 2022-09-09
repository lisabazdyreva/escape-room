import * as S from './quests-catalog.styled';
import QuestsFilter from '../quests-filter/quests-filter';
import QuestItem from '../quest-item/quest-item';

import { useSelector } from 'react-redux';
import { getFilteredQuests } from '../../../../store/app-process/selectors';


const QuestsCatalog = () => {
  const filteredQuests = useSelector(getFilteredQuests);

  return (
    <>
      <QuestsFilter  />
      <S.QuestsList>
        { filteredQuests.map((quest) => <QuestItem key={quest.id} quest={quest} />) }
      </S.QuestsList>
    </>
  );
}

export default QuestsCatalog;
