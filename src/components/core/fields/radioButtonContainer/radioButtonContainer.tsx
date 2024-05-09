// Packages
import { ReactElement, ReactNode } from 'react';

// Styles
import * as Styled from './styles';

interface RadioButtonContainerProps {
  children: ReactNode;
  error?: string;
}

export const RadioButtonContainer = (
  props: RadioButtonContainerProps
): ReactElement => {
  return (
    <Styled.RadioButtonContainer>
      <div className="radio__list">{props.children}</div>
      {props?.error && <div className="radio__error">{props?.error}</div>}
    </Styled.RadioButtonContainer>
  );
};
