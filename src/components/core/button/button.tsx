// Packages
import { ButtonHTMLAttributes, ReactElement } from 'react';

// Styles
import * as Styled from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, ...props }: ButtonProps): ReactElement => {
  return <Styled.ButtonContainer {...props}>{children}</Styled.ButtonContainer>;
};
