import * as S from './not-found-page.styled';

const NotFoundPage = () => {
  return(
    <S.WrapperNotFound>
      <S.HeaderNotFound>Такой страницы не существует</S.HeaderNotFound>

      <S.LinkToMain to='/'>На главную</S.LinkToMain>
    </S.WrapperNotFound>
  )
}

export default NotFoundPage;
