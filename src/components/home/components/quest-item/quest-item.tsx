import * as S from '../quests-catalog/quests-catalog.styled';
import { ReactComponent as IconPerson } from '../../../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../../../assets/img/icon-puzzle.svg';
import { IQuest } from '../../../../types/types';

import { getAltText, getQuestLevelText, getPeopleCountText } from '../../../../utils/utils';

import { AppRoute } from '../../../../const';

interface QuestItemProps {
  quest: IQuest,
}

const QuestItem = ({quest}: QuestItemProps) => {
  const {id, title, previewImg, level, peopleCount} = quest;

  const peopleCountText = getPeopleCountText(peopleCount);
  const levelText = getQuestLevelText(level);
  const altText = getAltText(title);

  const link = `${AppRoute.DetailedQuest}${id}`;

  return (
    <S.QuestItem>
      <S.QuestItemLink to={link}>
        <S.Quest>
          <S.QuestImage
            src={previewImg}
            width="344"
            height="232"
            alt={altText}
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
                {levelText}
              </S.QuestFeatureItem>
            </S.QuestFeatures>
          </S.QuestContent>
        </S.Quest>
      </S.QuestItemLink>
    </S.QuestItem>
  );
}

export default QuestItem;
