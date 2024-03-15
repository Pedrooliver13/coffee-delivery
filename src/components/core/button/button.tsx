// Packages
import { ButtonHTMLAttributes, ReactElement } from 'react';

// Styles
import * as Styled from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  variant?: 'primary' | 'secondary';
}

export const Button = ({
  children,
  variant = 'primary',
  ...props
}: ButtonProps): ReactElement => {
  return (
    <Styled.ButtonContainer variant={variant} {...props}>
      {props?.startIcon}
      {children}
      {props?.endIcon}
    </Styled.ButtonContainer>
  );
};
