import { ReactNode } from 'react';

export interface ICommonProps {
  children?: ReactNode,
}

export interface ILinkProps {
  $isActiveLink?: boolean,
  $isDisabled?: boolean,
}


export interface ITryGetQuestsButton {
  onClick: () => void,
}
