import * as S from './page-title.styled';
import { ICommonProps } from '../types';

const PageTitle = ({ children, ...props } :ICommonProps) => (
  <S.PageTitle {...props}>{children}</S.PageTitle>
);

export default PageTitle;
