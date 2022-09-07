import * as S from './quests-catalog.styled';
import QuestsFilter from '../quests-filter/quests-filter';
import { IMock } from '../../../app/types';
import QuestItem from '../quest-item/quest-item';



interface QuestsCatalogProps {
  quests: IMock[],
}

const QuestsCatalog = ({quests}: QuestsCatalogProps) => {

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
