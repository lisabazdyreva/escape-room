import * as S from './quests-catalog.styled';
import QuestsFilter from '../quests-filter/quests-filter';
import QuestItem from '../quest-item/quest-item';

import {useAppSelector} from '../../../../store/hooks';


const QuestsCatalog = () => {
  const quests = useAppSelector((state) => state.filteredQuests);

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
