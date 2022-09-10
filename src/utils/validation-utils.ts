import { ChangeEvent } from 'react';

export const checkNameValidity = (value: string, evt: ChangeEvent<HTMLInputElement>) => {
  if (value.length < 2) {
    evt.target.setCustomValidity('Имя должно содержать больше двух букв');
  } else {
    evt.target.setCustomValidity('');
  }
}

export const checkPhoneValidity = (value: string, evt: ChangeEvent<HTMLInputElement>) => {
  if (value.length !== 10) {
    evt.target.setCustomValidity('Телефон состоит из 10 символов');
  } else {
    evt.target.setCustomValidity('');
  }
}

export const checkPeopleCountValidity = (value: string, evt: ChangeEvent<HTMLInputElement>) => {
  if (Number(value) < 1) {
    evt.target.setCustomValidity('Минимальное количество участников: 1');
  } else {
    evt.target.setCustomValidity('');
  }
}
