import * as S from './container.styled';
import { ICommonProps } from '../types';

const Container = ({ children, ...props }: ICommonProps) => (
  <S.Container {...props}>{children}</S.Container>
);

export default Container;
