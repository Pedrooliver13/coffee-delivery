// Packages
import { ReactElement, HTMLAttributes } from 'react';
import { Minus as MinusIcon, Plus as PlusIcon } from 'phosphor-react';

// Styles
import * as Styled from './styles';

interface CounterButtonProps extends HTMLAttributes<HTMLDivElement> {}

export const CounterButton = (props: CounterButtonProps): ReactElement => {
  return (
    <Styled.CounterButtonContainer {...props}>
      <div className="minus">
        <MinusIcon size={14} />
      </div>

      <div className="value">1</div>

      <div className="more">
        <PlusIcon size={14} />
      </div>
    </Styled.CounterButtonContainer>
  );
};
