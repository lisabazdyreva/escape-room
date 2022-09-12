import * as S from '../booking-modal/booking-modal.styled';
import { ChangeEvent, FormEvent, useState } from 'react';
import BookingField from '../booking-field/booking-field';
import { useDispatch } from 'react-redux';
import { postOrder } from '../../../../store/actions/api-actions';
import { AppDispatch } from '../../../../store/store';
import { checkNameValidity, checkPhoneValidity, checkPeopleCountValidity } from '../../../../utils/validation-utils';

import { BookingInputName } from '../../../../const';
import { bookingInputs } from '../../../../utils/utils';
import {  FetchStatus } from '../../../../const';
import { setPostOrderStatus } from '../../../../store/actions/actions';


interface IBookingFormProps {
  closeHandler: () => void,
}


const BookingForm = ({closeHandler}: IBookingFormProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [peopleCount, setPeopleCount] = useState('');
  const [isLegal, setIsLegal] = useState(false);

  //TODO можно меньше кода?
  const onFormSubmit = (evt: FormEvent) => {

    evt.preventDefault();

    dispatch(postOrder({
      name,
      peopleCount: Number(peopleCount) || 1,
      phone: tel,
      isLegal,
    }))
      .then(() => {
        setTimeout(() => {
          closeHandler();
          dispatch(setPostOrderStatus(FetchStatus.Default));
        }, 1500);
      });

  }

  const onChangeHandler = (type: string, evt: ChangeEvent<HTMLInputElement>): void => {
    const value = evt.target.value;

    switch (type) {
      case BookingInputName.Name:
        setName(value);
        checkNameValidity(value, evt);
        break;
      case BookingInputName.Phone:
        setTel(value);
        checkPhoneValidity(value, evt);
        break;
      case BookingInputName.People:
        setPeopleCount(value); // TODO safari can input letters
        checkPeopleCountValidity(value, evt);
        break;
    }
  }

  const getValueState = (type: string) => {
    switch (type) {
      case BookingInputName.Name:
        return name;
      case BookingInputName.Phone:
        return tel;
      case BookingInputName.People:
        return peopleCount;
      default:
        return '';
    }
  }


  return (
    <S.BookingForm
      action="https://echo.htmlacademy.ru"
      method="post"
      id="booking-form"
      onSubmit={onFormSubmit}
    >
      {/*TODO fix index*/}
      {
        bookingInputs.map((bookingFieldData, id) => {
          const value = getValueState(bookingFieldData.title);
          const key = `${bookingFieldData.name} ${id}`;

          return <BookingField key={key} textInformation={bookingFieldData} handler={onChangeHandler} value={value} />
        })
      }

      <S.BookingSubmit>Отправить заявку</S.BookingSubmit>
      <S.BookingCheckboxWrapper>
        <S.BookingCheckboxInput
          type="checkbox"
          id="booking-legal"
          name="booking-legal"
          required
          checked={isLegal}
          onChange={() => setIsLegal(!isLegal)}
        />
        <S.BookingCheckboxLabel
          className="checkbox-label"
          htmlFor="booking-legal"
        >
          <S.BookingCheckboxText>
            Я согласен с{' '}
            <S.BookingLegalLink href="#">
              правилами обработки персональных данных и пользовательским
              соглашением
            </S.BookingLegalLink>
          </S.BookingCheckboxText>
        </S.BookingCheckboxLabel>
      </S.BookingCheckboxWrapper>
    </S.BookingForm>
  );
}

export default BookingForm;
