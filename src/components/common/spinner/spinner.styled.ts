import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid transparent;
  border-right: 1px solid ${({theme}) => theme.color.carrotOrange};
  border-bottom: 2px solid ${({theme}) => theme.color.carrotOrange};
  border-left: 6px solid ${({theme}) => theme.color.tangerine};
  background: transparent;
  width: 74px;
  height: 74px;
  border-radius: 50%;
  margin: 0 auto;
`;

const SpinnerWrapper = styled.div`
  text-align: center;
  padding-top: 20px;
`;

const SpinnerHeader = styled.h3`
  padding-top: 10px;
`;

export {Spinner, SpinnerWrapper, SpinnerHeader};
