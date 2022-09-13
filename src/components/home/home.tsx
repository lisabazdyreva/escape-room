import React from 'react';
import { useSelector } from 'react-redux';

import * as S from './home.styled';

import { FetchStatus, ErrorMessage, DOWNLOAD_MESSAGE } from '../../const';

import { setFetchStatusQuests } from '../../store/app-status/selectors';

import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext, Loading, ErrorInformation,
} from 'components/common/common';
import { QuestsCatalog, QuestsFilter } from './components/components';


const HomePage = () => {
  const fetchStatusQuests = useSelector(setFetchStatusQuests);

  const isTryingGetQuests = fetchStatusQuests === FetchStatus.Trying;
  const isSuccessGetQuests = fetchStatusQuests === FetchStatus.Success;
  const isErrorGetQuests = fetchStatusQuests === FetchStatus.Error;

  return (
    <MainLayout>
      <S.Main forwardedAs="main">
        <PageHeading>
          <PageTitle>Выберите тематику</PageTitle>
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </PageHeading>
        <QuestsFilter  />
        { isTryingGetQuests && <Loading children={DOWNLOAD_MESSAGE} /> }
        { isSuccessGetQuests && <QuestsCatalog /> }
        { isErrorGetQuests && <ErrorInformation message={ErrorMessage.QuestList} isQuestsListError={true}/>}
      </S.Main>
    </MainLayout>
  );
}
export default HomePage;
