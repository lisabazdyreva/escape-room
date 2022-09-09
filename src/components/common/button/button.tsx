import * as S from './button.styled';
import { ICommonProps } from '../types';


const Button = ({ children, ...props }: ICommonProps) => <S.Button {...props}>{children}</S.Button>;

export default Button;
