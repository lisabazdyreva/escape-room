import React from 'react';
import * as S from './loading.styled';
import { ICommonProps } from '../types';

const Loading = ({children}: ICommonProps) => <S.Main><S.LoadingElement>{children}</S.LoadingElement></S.Main>;

export default Loading;
