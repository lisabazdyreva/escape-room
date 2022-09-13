import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import * as S from './detailed-quest.styled';

import { ReactComponent as IconClock } from '../../../../assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from '../../../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../../../assets/img/icon-puzzle.svg';

import { getSelectedQuest } from '../../../../store/app-data/selectors';
import { BookingModal } from '../components';
import { getPeopleCountText, getAltText, getQuestTypeText, getQuestLevelText } from '../../../../utils/utils';


const DetailedQuest = () => {
  const quest = useSelector(getSelectedQuest);
  const {title, description, type, duration, coverImg, peopleCount, level} = quest;
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const handleButtonClick = () => {
    setIsBookingModalOpened(true);
  };

  const onModalCloseClick = () => {
    setIsBookingModalOpened(false);
  }

  const peopleCountText = getPeopleCountText(peopleCount);
  const durationText = `${duration} мин`;
  const levelText = getQuestLevelText(level);
  const typeText = getQuestTypeText(type);

  const imgSrc = `../${coverImg}`;
  const altText = getAltText(title);

  return (
      <S.Main>
          <S.PageImage
            src={imgSrc}
            alt={altText}
            width="1366"
            height="768"
          />
          <S.PageContentWrapper>
            <S.PageHeading>
              <S.PageTitle>{title}</S.PageTitle>
              <S.PageSubtitle>{typeText}</S.PageSubtitle>
            </S.PageHeading>

            <S.PageDescription>
              <S.Features>
                <S.FeaturesItem>
                  <IconClock width="20" height="20" />
                  <S.FeatureTitle>{durationText}</S.FeatureTitle>
                </S.FeaturesItem>
                <S.FeaturesItem>
                  <IconPerson width="19" height="24" />
                  <S.FeatureTitle>{peopleCountText}</S.FeatureTitle>
                </S.FeaturesItem>
                <S.FeaturesItem>
                  <IconPuzzle width="24" height="24" />
                  <S.FeatureTitle>{levelText}</S.FeatureTitle>
                </S.FeaturesItem>
              </S.Features>

              <S.QuestDescription>
                {description}
              </S.QuestDescription>

              <S.QuestBookingBtn onClick={handleButtonClick}>
                Забронировать
              </S.QuestBookingBtn>
            </S.PageDescription>
          </S.PageContentWrapper>

          { isBookingModalOpened && <BookingModal onModalClose={onModalCloseClick}/> }
      </S.Main>
  );
};

export default DetailedQuest;
