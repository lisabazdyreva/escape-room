import * as S from '../quests-catalog/quests-catalog.styled';
import { ReactComponent as IconPerson } from '../../../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../../../assets/img/icon-puzzle.svg';
import { IMock } from '../../../../types/types';

interface QuestItemProps {
  quest: IMock,
}

const QuestItem = ({quest}: QuestItemProps) => {
  const {id, title, previewImg, level, peopleCount} = quest;

  const peopleCountText = `${peopleCount[0]}–${peopleCount[1]} чел`;

  return (
    <S.QuestItem>
      <S.QuestItemLink to={`/quest/${id}`}>
        <S.Quest>
          <S.QuestImage
            src={previewImg}
            width="344"
            height="232"
            alt={`квест ${title}`}
          />

          <S.QuestContent>
            <S.QuestTitle>{title}</S.QuestTitle>

            <S.QuestFeatures>
              <S.QuestFeatureItem>
                <IconPerson />
                {peopleCountText}
              </S.QuestFeatureItem>
              <S.QuestFeatureItem>
                <IconPuzzle />
                {level}
              </S.QuestFeatureItem>
            </S.QuestFeatures>
          </S.QuestContent>
        </S.Quest>
      </S.QuestItemLink>
    </S.QuestItem>
  );
}

export default QuestItem;
