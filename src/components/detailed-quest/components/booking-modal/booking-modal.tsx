import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import BookingForm from '../booking-form/booking-form';


interface IBookingModalProps {
  onCloseModal: () => void,
}

const BookingModal = ({onCloseModal}: IBookingModalProps) => (
  <S.BlockLayer>
    <S.Modal>
      <S.ModalCloseBtn onClick={onCloseModal}>
        <IconClose width="16" height="16" />
        <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
      </S.ModalCloseBtn>
      <S.ModalTitle>Оставить заявку</S.ModalTitle>
      <BookingForm />
    </S.Modal>
  </S.BlockLayer>
);

export default BookingModal;
