import { ChangeEvent } from 'react';
import { MinValue, ValidationMessage } from '../const';

export const checkNameValidity = (value: string, evt: ChangeEvent<HTMLInputElement>) => {
  if (value.length < MinValue.Name) {
    evt.target.setCustomValidity(ValidationMessage.Name);
  } else {
    evt.target.setCustomValidity(ValidationMessage.Default);
  }
}

export const checkPhoneValidity = (value: string, evt: ChangeEvent<HTMLInputElement>) => {
  if (value.length !== MinValue.Phone) {
    evt.target.setCustomValidity(ValidationMessage.Phone);
  } else {
    evt.target.setCustomValidity(ValidationMessage.Default);
  }
}

export const checkPeopleCountValidity = (value: string, evt: ChangeEvent<HTMLInputElement>) => {
  if (Number(value) < MinValue.PeopleCount) {
    evt.target.setCustomValidity(ValidationMessage.PeopleCount);
  } else {
    evt.target.setCustomValidity(ValidationMessage.Default);
  }
}
