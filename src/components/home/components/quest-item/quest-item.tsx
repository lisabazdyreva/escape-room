import * as S from '../quests-catalog/quests-catalog.styled';
import { ReactComponent as IconPerson } from '../../../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../../../assets/img/icon-puzzle.svg';
import { IMock } from '../../../app/types';

import {useAppDispatch} from '../../../../store/hooks';
import {setActiveQuest} from '../../../../store/app-slicer';


interface QuestItemProps {
  quest: IMock,
}

const QuestItem = ({quest}: QuestItemProps) => {
  const {id, title, previewImg, level, peopleCount} = quest;

  const dispatch = useAppDispatch();

  const mouseEnterItemHandler = () => {
    dispatch(setActiveQuest(id));
  }

  const mouseLeaveItemHandler = () => {
    dispatch(setActiveQuest(0));
  }

  return (
    <S.QuestItem onMouseEnter={mouseEnterItemHandler} onMouseLeave={mouseLeaveItemHandler}>
      <S.QuestItemLink to={`/quest/${id}`}>
        <S.Quest>
          <S.QuestImage
            src={previewImg}
            width="344"
            height="232"
            alt="квест Склеп"
          />

          <S.QuestContent>
            <S.QuestTitle>{title}</S.QuestTitle>

            <S.QuestFeatures>
              <S.QuestFeatureItem>
                <IconPerson />
                {peopleCount[0]}–{peopleCount[1]} чел
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
