import React from 'react';

import * as S from './error-information.styled';

import { AppRoute, ErrorMessage } from '../../../const';
import { downloadQuests } from '../../../utils/utils';


interface INotFound {
  message: typeof ErrorMessage[keyof typeof ErrorMessage],
  isQuestsListError?: boolean,
}

const ErrorInformation = ({message, isQuestsListError}: INotFound) => {
  return (
    <S.Main>
      <S.NotFoundTitle>{message}</S.NotFoundTitle>
      {!isQuestsListError && <S.LinkToMain to={AppRoute.Home}>На главную</S.LinkToMain>}
      {isQuestsListError && <S.TryGetQuestsButton onClick={downloadQuests}>Попробовать снова</S.TryGetQuestsButton>}
    </S.Main>
  );
}

export default ErrorInformation;
