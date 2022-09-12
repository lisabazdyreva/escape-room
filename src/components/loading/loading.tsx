import React from 'react';
import * as S from './loading.styled';



const Loading = () => <S.LoadingElement children={'Идет загрузка'}></S.LoadingElement>; {/*TODO Подумать тексты, передавть как везде*/}
//TODO вынести типы из стилей
//TODO добавить дефолт экспорты чтобы убрать вложенность
//TODO Loading отправить в камон
export default Loading;
