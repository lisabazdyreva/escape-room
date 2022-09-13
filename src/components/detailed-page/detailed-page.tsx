import { useDispatch, useSelector } from 'react-redux';
import { setFetchStatusDetailedQuest } from '../../store/app-status/selectors';
import { FetchStatus, ErrorMessage, DOWNLOAD_MESSAGE } from '../../const';
import { Loading } from '../common/common';
import React, { useEffect } from 'react';
import {DetailedQuest} from './components/components';
import {MainLayout} from '../common/common';
import { useParams } from 'react-router-dom';
import { AppDispatch } from '../../store/store';
import { fetchQuest } from '../../store/actions/api-actions';

import {ErrorInformation}from '../common/common';

const DetailedPage = () => {
  const params: {id: string} = useParams();
  const {id} = params;

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchQuest(Number(id)));
  }, [id, dispatch])


  const fetchStatus = useSelector(setFetchStatusDetailedQuest);

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
