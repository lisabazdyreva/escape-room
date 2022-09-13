import { BookingForm, BookingModalInformation } from '../components';
import React from 'react';
import { useSelector } from 'react-redux';
import { setPostOrderStatus as setPostOrderStatusSelector } from '../../../../store/app-status/selectors';
import { FetchStatus, BookingMessage } from '../../../../const';


interface IBookingModalProps {
  onCloseModal: () => void,
}

const BookingModal = ({onCloseModal}: IBookingModalProps) =>  {
  const loadingPostStatus = useSelector(setPostOrderStatusSelector);

  const isPostStatusDefault = loadingPostStatus === FetchStatus.Default;
  const isPostStatusTrying = loadingPostStatus === FetchStatus.Trying;
  const isPostStatusSuccess = loadingPostStatus === FetchStatus.Success;
  const isPostStatusError = loadingPostStatus === FetchStatus.Error

  return (
      <>
        { isPostStatusDefault && <BookingForm closeHandler={onCloseModal} />}

        { isPostStatusTrying && <BookingModalInformation message={BookingMessage.Loading} isLoading={true}/>}

        { isPostStatusSuccess && <BookingModalInformation message={BookingMessage.Success}/>}

        {isPostStatusError && <BookingModalInformation message={BookingMessage.Error}/>}
    </>
  );
};

export default BookingModal;
