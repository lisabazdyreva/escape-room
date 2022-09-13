import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { FetchStatus, ErrorMessage, DOWNLOAD_MESSAGE } from '../../const';

import { DetailedQuest } from './components/components';
import { MainLayout, ErrorInformation, Loading } from '../common/common';

import { AppDispatch } from '../../types/action';
import { fetchQuest } from '../../store/actions/api-actions';
import { setFetchStatusDetailedQuest as setFetchStatusDetailedQuestSelector } from '../../store/app-status/selectors';
import { setFetchStatusDetailedQuest } from '../../store/actions/actions';


const DetailedPage = () => {
  const params: {id: string} = useParams();
  const {id} = params;

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(fetchQuest(Number(id)))
        .then(() => dispatch(setFetchStatusDetailedQuest(FetchStatus.Success)));
    }

    return () => {
      isMounted = false;
    }
  }, [id, dispatch])

  const fetchStatus = useSelector(setFetchStatusDetailedQuestSelector);

  const isTryingGetQuest = fetchStatus === FetchStatus.Trying;
  const isSuccessGetQuest = fetchStatus === FetchStatus.Success;
  const isErrorGetQuest = fetchStatus === FetchStatus.Error;

  return (
    <MainLayout>
      { isTryingGetQuest && <Loading children={DOWNLOAD_MESSAGE}/> }
      { isErrorGetQuest && <ErrorInformation message={ErrorMessage.DetailedQuest} />}
      { isSuccessGetQuest && <DetailedQuest />}
    </MainLayout>
  )
};

export default DetailedPage;
