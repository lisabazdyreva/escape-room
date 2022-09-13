import * as S from '../booking-modal/booking-modal.styled';
import { Spinner } from '../../../common/common';


interface IBookingModalInformationProps {
  message: string,
  isLoading?: boolean
}


const BookingModalInformation = ({message, isLoading}: IBookingModalInformationProps) => {
  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalTitle>
          {message}
          {isLoading && <Spinner />}
        </S.ModalTitle>
      </S.Modal>
    </S.BlockLayer>
  );
}

export default BookingModalInformation;
