import React, { useEffect } from 'react';
import { useState } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from '../../assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from '../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuest } from '../../store/actions/api-actions';

import { getSelectedQuest } from '../../store/app-data/selectors';
import { AppDispatch } from '../../store/store';



const DetailedQuest = () => {
  const params: {id: string} = useParams();
  const {id} = params;

  const dispatch = useDispatch<AppDispatch>(); // TODO WHY

  useEffect(() => {
    dispatch(fetchQuest(Number(id)));
  }, [id])


  const quest = useSelector(getSelectedQuest);

  const {title, description, type, duration, coverImg, peopleCount, level} = quest;

  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  const onCloseBtnClick = () => {
    setIsBookingModalOpened(false);
  }

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`../${coverImg}`}
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

        {isBookingModalOpened && <BookingModal onCloseModal={onCloseBtnClick}/>}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
