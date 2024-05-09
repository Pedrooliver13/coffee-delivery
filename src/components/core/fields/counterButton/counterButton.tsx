// Packages
import { ReactElement, HTMLAttributes, useState, useEffect } from 'react';
import { Minus as MinusIcon, Plus as PlusIcon } from 'phosphor-react';

// Styles
import * as Styled from './styles';

interface CounterButtonProps extends HTMLAttributes<HTMLDivElement> {
  value?: number;
  getValue?: (value: number) => void;
}

export const CounterButton = ({
  getValue,
  value,
  ...props
}: CounterButtonProps): ReactElement => {
  const [count, setCount] = useState(value || 1);

  const handleIncrement = (): void => {
    setCount((state) => state + 1);
  };

  const handleDecrement = (): void => {
    if (count === 1) {
      return;
    }

    setCount((state) => state - 1);
  };

  useEffect(() => {
    getValue && getValue(count);
  }, [props, getValue, count]);

  return (
    <Styled.CounterButtonContainer {...props}>
      <div className="minus" onClick={handleDecrement}>
        <MinusIcon size={14} />
      </div>

      <div className="value">{count}</div>

      <div className="more" onClick={handleIncrement}>
        <PlusIcon size={14} />
      </div>
    </Styled.CounterButtonContainer>
  );
};
