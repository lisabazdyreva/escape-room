import styled from 'styled-components';
import { Button } from '../../../common/common';
import IconTick from '../../../../assets/img/icon-tick.svg';

const BookingForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const BookingSubmit = styled(Button).attrs({type: 'submit'})`
  align-self: center;
  margin-top: 55px;
  margin-bottom: 21px;

  padding: 15px 34px 16px 34px;

  font-size: ${({ theme }) => theme.font.semibase};
  line-height: 16px;
  letter-spacing: 0.03em;
  background-color: ${({ theme }) => theme.color.pinkSwan};

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.color.gray};
  }
`;

const BookingCheckboxWrapper = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
`;

const BookingCheckboxLabel = styled.label`
  display: flex;
  position: relative;
  padding-left: 26px;

  cursor: pointer;

  &::before,
  &::after {
    position: absolute;
    top: 3px;
    left: 2px;

    width: 16px;
    height: 16px;

    opacity: 0.4;
  }

  &::before {
    content: '';
    background-color: ${({ theme }) => theme.color.tangerine};
    border-radius: 4px;
  }

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

const BookingCheckboxInput = styled.input.attrs({
  className: 'visually-hidden',
})`
  top: 20px;
  left: 10px;

  &:checked ~ .checkbox-label::after {
    content: '';

    background-image: url(${IconTick});
    background-repeat: no-repeat;
    background-position: center;
  }

  &:invalid ~ .checkbox-label::before {
    background-color: ${({theme}) => theme.color.errorColor};
  }

  &:focus ~ .checkbox-label {
    outline: 2px solid #4d90fe;
    outline-offset: 3px;
    opacity: 0.8;
  }

  &:active ~ .checkbox-label {
    opacity: 0.6;
  }
`;

const BookingCheckboxText = styled.span`
  font-size: ${({ theme }) => theme.font.semibase};
  line-height: 144%;
  color: ${({ theme }) => theme.color.whisper2};
`;

const BookingLegalLink = styled.a`
  text-decoration: underline;
`;

export {
  BookingForm,
  BookingSubmit,
  BookingCheckboxWrapper,
  BookingCheckboxLabel,
  BookingCheckboxInput,
  BookingCheckboxText,
  BookingLegalLink,
}
