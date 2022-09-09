import * as S from './page-heading.styled';

interface IPageHeadingProps {
  children: any,
}

const PageHeading = ({ children, ...props }: IPageHeadingProps) => (
  <S.PageHeading {...props}>{children}</S.PageHeading>
);

export default PageHeading;
