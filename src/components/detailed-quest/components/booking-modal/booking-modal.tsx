import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import BookingForm from '../booking-form/booking-form';
import React from 'react';
import { useSelector } from 'react-redux';
import { setPostOrderStatus as setPostOrderStatusSelector } from '../../../../store/app-status/selectors';
import Loading from '../../../loading/loading';


interface IBookingModalProps {
  onCloseModal: () => void,
}

const BookingModal = ({onCloseModal}: IBookingModalProps) =>  {
  const loadingPostStatus = useSelector(setPostOrderStatusSelector);

  const isDefault = loadingPostStatus === 'default';
  const isTrying = loadingPostStatus === 'trying';
  const isSuccess = loadingPostStatus === 'success';
  const isError = loadingPostStatus === 'error';


  const onSubmitHandler = () => {
    onCloseModal();
  }

  return (
      <>
        { isDefault &&
          <S.BlockLayer>
            <S.Modal>
              <S.ModalCloseBtn onClick={onCloseModal}>
                <IconClose width="16" height="16" />
                <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
              </S.ModalCloseBtn>
              <S.ModalTitle>Оставить заявку</S.ModalTitle>
              <BookingForm closeHandler={onSubmitHandler} />
            </S.Modal>
          </S.BlockLayer>
        }

        { isTrying &&
          <S.BlockLayer>
            <S.Modal>
              <S.ModalTitle>
                Подождите, форма отправляется!
                <Loading />
              </S.ModalTitle>
            </S.Modal>
          </S.BlockLayer>
        }

        {
          isSuccess &&
            <S.BlockLayer>
              <S.Modal>
                <S.ModalTitle>
                  Успех!
                </S.ModalTitle>
              </S.Modal>
            </S.BlockLayer>
        }

        {
          isError &&
          <S.BlockLayer>
            <S.Modal>
              <S.ModalTitle>
                Ошибка
              </S.ModalTitle>
            </S.Modal>
          </S.BlockLayer>
        }
    </>
  );
};

export default BookingModal;
