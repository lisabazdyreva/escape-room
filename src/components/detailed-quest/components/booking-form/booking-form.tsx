import * as S from '../booking-modal/booking-modal.styled';
import { FormEvent, useState } from 'react';
import BookingField from '../booking-field/booking-field';

enum BookingFields {
  NAME = 'name',
  PHONE = 'phone',
  PEOPLE = 'people',
}

const bookingFields = {
  NAME: {
    title: BookingFields.NAME,
    type: 'text',
    translationLabel: 'Ваше Имя',
    translationPlaceholder: 'Имя',
  },
  PHONE: {
    title: BookingFields.PHONE,
    type: 'tel',
    translationLabel: 'Контактный телефон',
    translationPlaceholder: 'Телефон',
  },
  PEOPLE: {
    title: BookingFields.PEOPLE,
    type: 'number',
    translationLabel: 'Количество участников',
    translationPlaceholder: 'Количество участников',
  },
};

const BookingForm = () => {
  const [name, setName] = useState<string | number>(''); // fix
  const [tel, setTel] = useState<string | number>('');
  const [peopleCount, setPeopleCount] = useState<number>(1);

  const onFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    // make validation
    setName('');
    setTel('');
    setPeopleCount(1);
  }

  const onChangeHandler = (type: string, value: string | number) => {
    switch (type) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setTel(value);
        break;
      case 'people':
        setPeopleCount(Number(value));
        break;
    }
  }

  const getValue = (type: string) => {
    switch (type) {
      case 'name':
        return name;
      case 'phone':
        return tel;
      case 'people':
        return peopleCount;
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
          return <BookingField key={`${name} ${id}`} textInformation={information} handler={onChangeHandler} getValue={getValue} />
        })
      }

      <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
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
