import * as S from './container.styled';

interface IContainerProps {
  children: any,
}

const Container = ({ children, ...props }: IContainerProps) => (
  <S.Container {...props}>{children}</S.Container>
);

export default Container;
