import * as S from './quests-catalog.styled';
import QuestsFilter from '../quests-filter/quests-filter';
import QuestItem from '../quest-item/quest-item';


import { useSelector } from 'react-redux';
import { getQuests } from '../../../../store/app-data/selectors';


const QuestsCatalog = () => {
  const quests = useSelector(getQuests);

  return (
    <>
      <QuestsFilter />
      <S.QuestsList>
        { quests.map((quest) => <QuestItem key={quest.id} quest={quest} /> )}
      </S.QuestsList>
    </>
  );
}

export default QuestsCatalog;
