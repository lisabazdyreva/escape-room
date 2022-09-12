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
import { setFetchStatusDetailedQuest } from '../../store/app-status/selectors';
import Loading from '../loading/loading';

import { getType, getLevel, getPeopleCountText, getAltText } from '../../utils/utils';
import { FetchStatusGet } from '../../types/types';


const DetailedQuest = () => {
  const fetchStatus = useSelector(setFetchStatusDetailedQuest);

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

  const peopleCountText = getPeopleCountText(peopleCount);
  const durationText = `${duration} мин`;
  const levelText = getLevel(level);
  const typeText = getType(type);

  const imgSrc = `../${coverImg}`;
  const altText = getAltText(title);

  console.log(typeText);

  return (
    <MainLayout>
      <S.Main>
      { fetchStatus === FetchStatusGet.Trying && <Loading /> }
      { fetchStatus === FetchStatusGet.Success
        &&
        <>
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

              <S.QuestBookingBtn onClick={onBookingBtnClick}>
                Забронировать
              </S.QuestBookingBtn>
            </S.PageDescription>
          </S.PageContentWrapper>

          { isBookingModalOpened && <BookingModal onCloseModal={onCloseBtnClick}/> }

        </>
      }
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
