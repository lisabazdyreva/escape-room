import * as S from './page-heading.styled';
import { ICommonProps } from '../types';

const PageHeading = ({ children, ...props }: ICommonProps) => (
  <S.PageHeading {...props}>{children}</S.PageHeading>
);

export default PageHeading;
