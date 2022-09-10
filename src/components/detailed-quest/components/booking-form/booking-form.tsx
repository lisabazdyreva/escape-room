import * as S from '../booking-modal/booking-modal.styled';
import { ChangeEvent, FormEvent, useState } from 'react';
import BookingField from '../booking-field/booking-field';
import { useDispatch } from 'react-redux';
import { postOrder } from '../../../../store/actions/api-actions';
import { AppDispatch } from '../../../../store/store';
import { checkNameValidity, checkPhoneValidity, checkPeopleCountValidity } from '../../../../utils/validation-utils';

import { bookingFields } from '../../../../const';
import {BookingFields} from '../../../../types/types';
import { setPostOrderStatus } from '../../../../store/actions/actions';


interface IBookingFormProps {
  closeHandler: () => void,
}

const BookingForm = ({closeHandler}: IBookingFormProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [peopleCount, setPeopleCount] = useState('');


  const onFormSubmit = (evt: FormEvent) => {

    evt.preventDefault();
    const isLegal = true;

    dispatch(postOrder({
      name,
      peopleCount: Number(peopleCount) || 1,
      phone: tel,
      isLegal,
    }))
      .then(() => {
        setTimeout(() => {
          closeHandler();
          dispatch(setPostOrderStatus('default'));
        }, 1500);
      });

  }

  const onChangeHandler = (type: string, evt: ChangeEvent<HTMLInputElement>): void => {
    const value = evt.target.value;

    switch (type) {
      case BookingFields.NAME:
        setName(value);
        checkNameValidity(value, evt);
        break;
      case BookingFields.PHONE:
        setTel(value);
        checkPhoneValidity(value, evt);
        break;
      case BookingFields.PEOPLE:
        setPeopleCount(value);
        checkPeopleCountValidity(value, evt);
        break;
    }
  }

  const getValueState = (type: string) => {
    switch (type) {
      case BookingFields.NAME:
        return name;
      case BookingFields.PHONE:
        return tel;
      case BookingFields.PEOPLE:
        return peopleCount;
      default:
        return '';
    }
  }

  const fields = Object.entries(bookingFields);

  return (
    <S.BookingForm
      action="https://echo.htmlacademy.ru"
      method="post"
      id="booking-form"
      onSubmit={onFormSubmit}
    >
      {
        fields.map(([name, information], id) => {
          const value = getValueState(information.title);
          const key = `${name} ${id}`;

          return <BookingField key={key} textInformation={information} handler={onChangeHandler} value={value} />
        })
      }

      <S.BookingSubmit>Отправить заявку</S.BookingSubmit>
      <S.BookingCheckboxWrapper>
        <S.BookingCheckboxInput
          type="checkbox"
          id="booking-legal"
          name="booking-legal"
          required
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
