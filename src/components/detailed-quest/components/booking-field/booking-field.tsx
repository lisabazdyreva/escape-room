import * as S from '../booking-modal/booking-modal.styled';
import React, { ChangeEvent } from 'react';

interface IBookingFieldProps {
  textInformation: {
    title: string,
    type: string,
    translationLabel: string,
    translationPlaceholder: string,
  },
  handler: (title: string, value: string | number) => void,
  getValue: (type: string) => string | number | undefined,
}

const BookingField = (props: IBookingFieldProps) => {
  const {title, type, translationLabel, translationPlaceholder} = props.textInformation;

  const attrValue = `booking-${title}`;

  const inputChanged = (evt: ChangeEvent<HTMLInputElement>) => {
    props.handler(title, evt.target.value);
  }

  const value = props.getValue(title);

  return (
    <S.BookingField>
      <S.BookingLabel htmlFor={attrValue}>{translationLabel}</S.BookingLabel>
      <S.BookingInput
        type={type}
        id={attrValue}
        name={attrValue}
        placeholder={translationPlaceholder}
        required
        onChange={inputChanged}
        value={value}
      />
    </S.BookingField>
  );
}

export default BookingField;
