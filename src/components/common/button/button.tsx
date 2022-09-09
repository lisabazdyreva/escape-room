import React from 'react';
import * as S from './button.styled';

interface IButtonProps {
  children: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined,
}

const Button = ({ children, ...props } : IButtonProps) => (
  <S.Button {...props}>{children}</S.Button>
);

export default Button;
