import React from 'react';
import { useSelector } from 'react-redux';

import { FetchStatus, BookingMessage } from '../../../../const';

import { setPostOrderStatus as setPostOrderStatusSelector } from '../../../../store/app-status/selectors';

import { BookingForm, BookingModalInformation } from '../components';


interface IBookingModalProps {
  onModalClose: () => void,
}


const BookingModal = ({onModalClose}: IBookingModalProps) =>  {
  const loadingPostStatus = useSelector(setPostOrderStatusSelector);

  const isPostStatusDefault = loadingPostStatus === FetchStatus.Default;
  const isPostStatusTrying = loadingPostStatus === FetchStatus.Trying;
  const isPostStatusSuccess = loadingPostStatus === FetchStatus.Success;
  const isPostStatusError = loadingPostStatus === FetchStatus.Error

  return (
      <>
        { isPostStatusDefault && <BookingForm onModalClose={onModalClose} />}

        { isPostStatusTrying && <BookingModalInformation message={BookingMessage.Loading} isLoading={true}/>}

        { isPostStatusSuccess && <BookingModalInformation message={BookingMessage.Success}/>}

        {isPostStatusError && <BookingModalInformation message={BookingMessage.Error}/>}
    </>
  );
};

export default BookingModal;
