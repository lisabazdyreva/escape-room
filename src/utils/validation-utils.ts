import { ChangeEvent } from 'react';
import { MinValue, POINT, ValidationMessage } from '../const';


export const checkNameValidity = (evt: ChangeEvent<HTMLInputElement>) => {
  const value = evt.target.value;
  if (value.length < MinValue.Name) {
    evt.target.setCustomValidity(ValidationMessage.Name);
  } else {
    evt.target.setCustomValidity(ValidationMessage.Default);
  }
}

export const checkPhoneValidity = (value: string, evt: ChangeEvent<HTMLInputElement>) => {
  if (value.length !== MinValue.Phone) {
    evt.target.setCustomValidity(ValidationMessage.Phone);
  } else if (isNaN(Number(value))) {
    evt.target.setCustomValidity(ValidationMessage.PhoneIsNumbers);
  } else {
    evt.target.setCustomValidity(ValidationMessage.Default);
  }
}

const checkIsNotInteger = (value: string) => {
  return Number(value) !== parseInt(value) || value[value.length - 1] === POINT;
}

export const checkPeopleCountValidity = (value: string, evt: ChangeEvent<HTMLInputElement>) => {
  const isNotInteger = checkIsNotInteger(value);

  if (isNotInteger) {
    evt.target.setCustomValidity(ValidationMessage.PeopleCountIsInteger);
  } else if (Number(value) < MinValue.PeopleCount) {
    evt.target.setCustomValidity(ValidationMessage.PeopleCount);
  } else {
    evt.target.setCustomValidity(ValidationMessage.Default);
  }
}
