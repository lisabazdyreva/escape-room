import * as S from './booking-field.styled';
import React, { ChangeEvent } from 'react';
import { BookingInputName} from '../../../../const';
import { checkNameValidity, checkPeopleCountValidity, checkPhoneValidity } from '../../../../utils/validation-utils';

import {Dispatch, SetStateAction} from 'react';


interface IBookingFieldProps {
  textInformation: {
    title: string,
    type: string,
    translationLabel: string,
    translationPlaceholder: string,
    tooltipText: string,
  },
  handler: Dispatch<SetStateAction<string>>,
  value:  string,
}

const BookingField = (props: IBookingFieldProps) => {
  const {title, type, translationLabel, translationPlaceholder, tooltipText} = props.textInformation;

  const attrValue = `booking-${title}`;

  const changeInputHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;

    if (title === BookingInputName.Name) {
      checkNameValidity(evt);
      props.handler(value);
      return;
    }

    const valueNonSpaces = value.trim();
    if (!isNaN(Number(valueNonSpaces))) {

      if (title === BookingInputName.Phone) {
        checkPhoneValidity(valueNonSpaces, evt);
      }

      if (title === BookingInputName.People) {
        checkPeopleCountValidity(valueNonSpaces, evt);
      }
      props.handler(valueNonSpaces);
    }
  }

  return (
    <S.BookingField>
      <S.BookingLabel htmlFor={attrValue}>{translationLabel}</S.BookingLabel>
        <S.BookingInput
          type={type}
          id={attrValue}
          name={attrValue}
          placeholder={translationPlaceholder}
          onChange={changeInputHandler}
          value={props.value}
          title={tooltipText}
          required
          autoComplete='off'
        />
    </S.BookingField>
  );
}

export default BookingField;
