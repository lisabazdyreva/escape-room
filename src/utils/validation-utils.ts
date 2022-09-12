import { ChangeEvent } from 'react';
import { MinValues, ValidationMessages } from '../const';

export const checkNameValidity = (value: string, evt: ChangeEvent<HTMLInputElement>) => {
  if (value.length < MinValues.Name) {
    evt.target.setCustomValidity(ValidationMessages.Name);
  } else {
    evt.target.setCustomValidity(ValidationMessages.Default);
  }
}

export const checkPhoneValidity = (value: string, evt: ChangeEvent<HTMLInputElement>) => {
  if (value.length !== MinValues.Phone) {
    evt.target.setCustomValidity(ValidationMessages.Phone);
  } else {
    evt.target.setCustomValidity(ValidationMessages.Default);
  }
}

export const checkPeopleCountValidity = (value: string, evt: ChangeEvent<HTMLInputElement>) => {
  if (Number(value) < MinValues.PeopleCount) {
    evt.target.setCustomValidity(ValidationMessages.PeopleCount);
  } else {
    evt.target.setCustomValidity(ValidationMessages.Default);
  }
}
