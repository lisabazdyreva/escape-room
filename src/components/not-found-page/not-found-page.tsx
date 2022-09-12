import * as S from './not-found-page.styled';
import {AppRoute} from '../../const';


const NotFoundPage = () => {
  return(
    <S.WrapperNotFound>
      <S.HeaderNotFound>Такой страницы не существует</S.HeaderNotFound>

      <S.LinkToMain to={AppRoute.Home}>На главную</S.LinkToMain> {/*TODO стили для кнопки*/}
    </S.WrapperNotFound>
  )
}

export default NotFoundPage;
