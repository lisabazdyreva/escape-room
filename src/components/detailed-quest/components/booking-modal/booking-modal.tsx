import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import BookingForm from '../booking-form/booking-form';
import React from 'react';
import { useSelector } from 'react-redux';
import { setPostOrderStatus as setPostOrderStatusSelector } from '../../../../store/app-status/selectors';
import Loading from '../../../loading/loading';
import { FetchStatus } from '../../../../const';


interface IBookingModalProps {
  onCloseModal: () => void,
}

const BookingModal = ({onCloseModal}: IBookingModalProps) =>  {
  const loadingPostStatus = useSelector(setPostOrderStatusSelector);

  return (
      <>
        { loadingPostStatus === FetchStatus.Default &&
          <S.BlockLayer>
            <S.Modal>
              <S.ModalCloseBtn onClick={onCloseModal}>
                <IconClose width="16" height="16" />
                <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
              </S.ModalCloseBtn>
              <S.ModalTitle>Оставить заявку</S.ModalTitle>
              <BookingForm closeHandler={onCloseModal} />
            </S.Modal>
          </S.BlockLayer>
        }

        { loadingPostStatus === FetchStatus.Trying &&
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
          loadingPostStatus === FetchStatus.Success &&
            <S.BlockLayer>
              <S.Modal>
                <S.ModalTitle>
                  Успех!
                </S.ModalTitle>
              </S.Modal>
            </S.BlockLayer>
        }

        {
          loadingPostStatus === FetchStatus.Error &&
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
