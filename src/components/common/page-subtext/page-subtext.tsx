import * as S from './page-subtext.styled';
import { ICommonProps } from '../types';

const PageSubtext = ({ children, ...props } :ICommonProps) => (
  <S.PageSubtext {...props}>{children}</S.PageSubtext>
);

export default PageSubtext;
