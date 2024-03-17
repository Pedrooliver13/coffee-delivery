// Packages
import { InputHTMLAttributes, ReactElement } from 'react';

// Styles
import * as Styled from './styles';

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  starticon?: ReactElement;
}

export const RadioButton = (props: RadioButtonProps): ReactElement => {
  return (
    <Styled.RadioButtonContainer
      htmlFor={String(props.value)}
      checked={Boolean(props.checked)}
    >
      {props?.starticon && props.starticon}
      {props.label}
      <input type="radio" id={String(props.value)} {...props} />
    </Styled.RadioButtonContainer>
  );
};
