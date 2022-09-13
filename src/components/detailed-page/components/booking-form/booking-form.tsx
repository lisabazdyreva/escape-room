import React, {FormEvent, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as S from './booking-form.styled';
import * as SM from '../booking-modal/booking-modal.styled';

import { ReactComponent as IconClose } from '../../../../assets/img/icon-close.svg';
import { BookingInputName, TIME_SHOWING_MODAL, FetchStatus } from '../../../../const';

import { postOrder } from '../../../../store/actions/api-actions';
import { AppDispatch } from '../../../../types/action';
import { setPostOrderStatus } from '../../../../store/actions/actions';

import { bookingInputs, isEsc } from '../../../../utils/utils';

import {BookingField} from '../components';


type Title = typeof BookingInputName[keyof typeof BookingInputName];

interface IBookingFormProps {
  onModalClose: () => void,
}


const BookingForm = ({onModalClose}: IBookingFormProps) => {

  useEffect(() => {
    let isMounted = true;

    const handleEscapeKeyPress = (evt: KeyboardEvent) => {
      if (isEsc(evt.code)) {
        onModalClose();
      }
    }

    if (isMounted) {
      document.addEventListener('keydown', handleEscapeKeyPress);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress);
      isMounted = false;
    }
  }, [onModalClose]);


  const dispatch = useDispatch<AppDispatch>();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [peopleCount, setPeopleCount] = useState('');
  const [isLegal, setIsLegal] = useState(false);


  const handleFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    dispatch(postOrder({
      name,
      peopleCount: Number(peopleCount),
      phone,
      isLegal,
    }))
      .then(() => {
        setTimeout(() => {
          onModalClose();
          dispatch(setPostOrderStatus(FetchStatus.Default));
        }, TIME_SHOWING_MODAL);
      });

  }

  const handleCheckboxChange = () => {
    setIsLegal(!isLegal);
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

  const getChangeValueHandler = (title: Title) => {
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
        <SM.ModalCloseBtn onClick={onModalClose}>
          <IconClose width="16" height="16" />
          <SM.ModalCloseLabel>Закрыть окно</SM.ModalCloseLabel>
        </SM.ModalCloseBtn>
        <SM.ModalTitle>Оставить заявку</SM.ModalTitle>
        <S.BookingForm
          action="https://echo.htmlacademy.ru"
          method="post"
          id="booking-form"
          onSubmit={handleFormSubmit}
        >

          {
            bookingInputs.map((bookingFieldData, index) => {
              const value = getValueState(bookingFieldData.title);
              const onChangeHandler = getChangeValueHandler(bookingFieldData.title);
              const key = `${bookingFieldData.name} ${index}`;

              return <BookingField
                key={key}
                textInformation={bookingFieldData}
                onInputChange={onChangeHandler}
                stateValue={value}
              />
            })
          }

          <S.BookingSubmit>Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              checked={isLegal}
              onChange={handleCheckboxChange}
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
      </SM.Modal>
    </SM.BlockLayer>
  );
}

export default BookingForm;
