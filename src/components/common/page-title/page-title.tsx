import * as S from './page-title.styled';

interface IPageTitleProps {
  children: any,
}

const PageTitle = ({ children, ...props } : IPageTitleProps) => (
  <S.PageTitle {...props}>{children}</S.PageTitle>
);

export default PageTitle;
