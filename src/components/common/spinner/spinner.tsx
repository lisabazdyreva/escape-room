import * as S from './spinner.styled';
import { ICommonProps } from '../types';

const Spinner = ({children}: ICommonProps) => (
  <S.SpinnerWrapper>
    <S.Spinner/>
    <S.SpinnerHeader>{children}</S.SpinnerHeader>
  </S.SpinnerWrapper>
);

export default Spinner;
