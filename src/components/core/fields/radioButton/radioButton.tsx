// Packages
import { InputHTMLAttributes, ReactElement } from 'react';

// Styles
import * as Styled from './styles';

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  startIcon?: ReactElement;
}

export const RadioButton = (props: RadioButtonProps): ReactElement => {
  return (
    <Styled.RadioButtonContainer
      htmlFor={String(props.value)}
      checked={Boolean(props.checked)}
    >
      {props.startIcon && props.startIcon}
      {props.label}
      <input type="radio" id={String(props.value)} {...props} />
    </Styled.RadioButtonContainer>
  );
};
