import styled from 'styled-components';

const BookingField = styled.p`
  display: flex;
  flex-direction: column;

  margin: 0;
  padding: 0 16px 0 0;

  &:not(:last-of-type) {
    margin-bottom: 30px;
  }
`;

const BookingLabel = styled.label`
  margin-bottom: 15px;
  color: ${({ theme }) => theme.color.whisper2};
`;

const BookingInput = styled.input`
  padding: 17px 24px 18px 23px;

  font-family: inherit;

  color: ${({ theme }) => theme.color.white};
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 3px;

  &::placeholder {
    color: ${({ theme }) => theme.color.whisper};
    opacity: 0.64;
  }

  &:focus,
  &:hover {
    opacity: 0.8;
    border: 1px solid ${({theme}) => theme.color.errorColor};
  }

  &:invalid {
    border: 1px solid ${({theme}) => theme.color.errorColor};
  }
`;

export {
  BookingField,
  BookingLabel,
  BookingInput,
}
