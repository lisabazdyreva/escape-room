import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import * as S from './booking-field.styled';

import {
  BOOKING,
  BookingInputDictionary,
  BookingInputName,
  BookingInputPlaceholder,
  BookingInputType,
} from '../../../../const';
import { checkNameValidity, checkPeopleCountValidity, checkPhoneValidity } from '../../../../utils/validation-utils';


interface IBookingFieldProps {
  textInformation: {
    title: typeof BookingInputName[keyof typeof BookingInputName],
    type: typeof BookingInputType[keyof typeof BookingInputType],
    translationLabel: typeof BookingInputDictionary[keyof typeof BookingInputDictionary],
    translationPlaceholder: typeof BookingInputPlaceholder[keyof typeof BookingInputPlaceholder],
  },
  onInputChange: Dispatch<SetStateAction<string>>,
  stateValue: string,
}


const BookingField = ({textInformation, onInputChange, stateValue}: IBookingFieldProps) => {
  const { title, type, translationLabel, translationPlaceholder } = textInformation;
  const attributeValue = `${BOOKING}-${title}`;

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;

    if (title === BookingInputName.Name) {
      checkNameValidity(evt);
      onInputChange(value);
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
      onInputChange(valueNonSpaces);
    }
  }

  return (
    <S.BookingField>
      <S.BookingLabel htmlFor={attributeValue}>{translationLabel}</S.BookingLabel>
        <S.BookingInput
          type={type}
          id={attributeValue}
          name={attributeValue}
          placeholder={translationPlaceholder}
          onChange={handleInputChange}
          value={stateValue}
          required
          autoComplete='off'
        />
    </S.BookingField>
  );
}

export default BookingField;
