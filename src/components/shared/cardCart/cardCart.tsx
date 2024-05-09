// Packages
import { ReactElement } from 'react';
import { Trash as TrashIcon } from 'phosphor-react';
import { toast } from 'react-toastify';

// Components
import { CounterButton, Button } from 'components/core';

// Hooks
import { useGlobalContext } from 'hooks/useGlobalContext';

// Models
import { Coffee } from 'models/coffee';

// Utils
import { getCurrencyFormatted } from 'utils/functions';

// Styles
import * as Styled from './styles';

interface CardCartProps {
  data: Coffee;
}

export const CardCart = ({ data }: CardCartProps): ReactElement => {
  const { removeCoffeeFromCart, updateQuantityCoffeeInCart } =
    useGlobalContext();

  const handleClickRemoveProductInCart = (): void => {
    removeCoffeeFromCart(data?.id);

    toast.info('Produto removido do carrinho!', { theme: 'dark' });
  };

  const handleQuantityProductInCartChange = (quantity: number): void => {
    updateQuantityCoffeeInCart({ id: data?.id, quantity });
  };

  return (
    <Styled.CardCartContainer>
      <img src={data?.photo} alt={data?.name} />

      <div className="content">
        <header className="content__header">
          <h3 className="content__header--title">{data?.name}</h3>

          <span className="content__header--price">
            {getCurrencyFormatted(data?.price)}
          </span>
        </header>

        <div className="content__footer">
          <CounterButton
            value={data?.quantity}
            getValue={handleQuantityProductInCartChange}
          />
          <Button
            variant="secondary"
            starticon={<TrashIcon size={16} />}
            onClick={handleClickRemoveProductInCart}
          >
            Remover
          </Button>
        </div>
      </div>
    </Styled.CardCartContainer>
  );
};
