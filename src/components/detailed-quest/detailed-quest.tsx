import React from 'react';
import { useState } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from '../../assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from '../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';

import { IMock, Levels, Types } from '../app/types';
import { getValue } from '../app/utils';
import { useParams } from 'react-router-dom';

// type DetailedQuestProps = {
//   quest?: IMock,
// }
const eng_types = Object.keys(Types);
const rus_types = Object.values(Types);

const eng_levels = Object.keys(Levels);
const rus_levels = Object.values(Levels);

const Mock: IMock = {
  "id": 1,
  "title": "Склеп",
  "description": "Средневековое кладбище таит в себе много страшных тайн. Местные жители говорят, что в склепе похоронен граф вампир, который по ночам выходит на охоту, чтобы испить человеческой крови. Через час солнце опустится за горизонт, успеете ли вы убить вампира и выбраться из склепа?",
  "previewImg": "img/preview-sklep.jpg",
  "coverImg": "img/cover-sklep.jpg",
  "type": getValue('type', eng_types, rus_types),
  "level": getValue('level', eng_levels, rus_levels),
  "peopleCount": [2, 5],
  "duration": 120
};

const DetailedQuest = () => {
  const params: {id: string} = useParams();
  const {id} = params;


  const {title, description, type, duration, coverImg, peopleCount, level} = Mock;

  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={coverImg}
          alt={`Квест ${title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{title}</S.PageTitle>
            <S.PageSubtitle>{type}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{peopleCount[0]}–{peopleCount[1]} чел</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{level}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal />}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
