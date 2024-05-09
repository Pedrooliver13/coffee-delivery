// Packages
import { ReactElement, InputHTMLAttributes, forwardRef } from 'react';

// Styles
import * as Styled from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  error?: string | undefined;
  className?: string;
}

const InputBase = (
  props: InputProps,
  ref: React.LegacyRef<HTMLInputElement> | undefined
): ReactElement => {
  return (
    <Styled.InputContainer className={props.className}>
      <input
        id={props.id}
        ref={ref}
        {...props}
        className=""
        placeholder={props.label}
      />
      <p className={props.error ? 'error' : ''}>{props?.error}</p>
    </Styled.InputContainer>
  );
};

export const Input = forwardRef(InputBase);
