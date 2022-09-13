import * as S from './booking-form.styled';
import * as SM from '../booking-modal/booking-modal.styled';

import React, {FormEvent, useState } from 'react';
import {BookingField} from '../components';
import { useDispatch } from 'react-redux';
import { postOrder } from '../../../../store/actions/api-actions';
import { AppDispatch } from '../../../../store/store';

import { BookingInputName, TIME_SHOWING_MODAL } from '../../../../const';
import { bookingInputs } from '../../../../utils/utils';
import {  FetchStatus } from '../../../../const';
import { setPostOrderStatus } from '../../../../store/actions/actions';
import { ReactComponent as IconClose } from '../../../../assets/img/icon-close.svg';


type Title = typeof BookingInputName[keyof typeof BookingInputName];

interface IBookingFormProps {
  closeHandler: () => void,
}


const BookingForm = ({closeHandler}: IBookingFormProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [peopleCount, setPeopleCount] = useState('');
  const [isLegal, setIsLegal] = useState(false);

  const onFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    dispatch(postOrder({
      name,
      peopleCount: Number(peopleCount),
      phone,
      isLegal,
    }))
      .then(() => {
        setTimeout(() => {
          closeHandler();
          dispatch(setPostOrderStatus(FetchStatus.Default));
        }, TIME_SHOWING_MODAL);
      });

  }

  const getValueState = (title: Title) => {
    switch (title) {
      case BookingInputName.Name:
        return name;
      case BookingInputName.Phone:
        return phone;
      case BookingInputName.People:
        return peopleCount;
    }
  }

  const getChangeHandler = (title: Title) => {
    switch (title) {
      case BookingInputName.Name:
        return setName;
      case BookingInputName.Phone:
        return setPhone;
      case BookingInputName.People:
        return setPeopleCount;
    }
  }

  return (
    <SM.BlockLayer>
      <SM.Modal>
        <SM.ModalCloseBtn onClick={closeHandler}>
          <IconClose width="16" height="16" />
          <SM.ModalCloseLabel>Закрыть окно</SM.ModalCloseLabel>
        </SM.ModalCloseBtn>
        <SM.ModalTitle>Оставить заявку</SM.ModalTitle>
        <S.BookingForm
          action="https://echo.htmlacademy.ru"
          method="post"
          id="booking-form"
          onSubmit={onFormSubmit}
        >

          {
            bookingInputs.map((bookingFieldData, index) => {
              const value = getValueState(bookingFieldData.title);
              const onChangeHandler = getChangeHandler(bookingFieldData.title);
              const key = `${bookingFieldData.name} ${index}`;

              return <BookingField
                key={key}
                textInformation={bookingFieldData}
                handler={onChangeHandler}
                value={value}
              />
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
      </SM.Modal>
  </SM.BlockLayer>

  );
}

export default BookingForm;
