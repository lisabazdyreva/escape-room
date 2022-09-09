import * as S from './page-subtext.styled';

interface IPageSubtextProps {
  children: any,
}

const PageSubtext = ({ children, ...props } : IPageSubtextProps) => (
  <S.PageSubtext {...props}>{children}</S.PageSubtext>
);

export default PageSubtext;
