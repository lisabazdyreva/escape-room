import * as S from '../booking-modal/booking-modal.styled';
import React, { ChangeEvent } from 'react';


interface IBookingFieldProps {
  textInformation: {
    title: string,
    type: string,
    translationLabel: string,
    translationPlaceholder: string,
  },
  handler: (title: string, value: ChangeEvent<HTMLInputElement>) => void,
  value:  string | number,
}

const BookingField = (props: IBookingFieldProps) => {
  const {title, type, translationLabel, translationPlaceholder} = props.textInformation;

  const attrValue = `booking-${title}`;

  const inputChanged = (evt: ChangeEvent<HTMLInputElement>) => {
      props.handler(title, evt);
  }

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
        value={props.value}
      />
    </S.BookingField>
  );
}

export default BookingField;
