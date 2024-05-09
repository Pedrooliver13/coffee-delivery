// Packages
import { ReactElement, useState } from 'react';
import { toast } from 'react-toastify';
import { ShoppingCart as ShoppingCartIcon } from 'phosphor-react';

// Components
import { CounterButton } from 'components/core';

// Hooks
import { useGlobalContext } from 'hooks/useGlobalContext';

// Models
import { Coffee } from 'models/coffee';

// Utils
import { convertNumberToCurrencyWithouthSymbol } from 'utils/functions';

// Styles
import * as Styled from './styles';

interface CardProps {
  data: Coffee;
}

export const Card = ({ data }: CardProps): ReactElement => {
  const { addNewCoffeeInCart, updateQuantityCoffeeInCart, cartList } =
    useGlobalContext();

  const cartItem = cartList.find((product) => product.id === data.id);
  const [quantity, setQuantity] = useState(cartItem?.quantity || 1);

  const handleClickAddProductInCart = () => {
    const isAlreadyInCart = Boolean(cartItem);

    if (isAlreadyInCart) {
      return updateQuantityCoffeeInCart({ id: data?.id, quantity });
    }

    addNewCoffeeInCart({ ...data, quantity });

    toast.info('Produto adicionado ao carrinho!', {
      theme: 'dark',
      autoClose: 400,
    });
  };

  const handleQuantityProductInCart = (value: number): void => {
    setQuantity(value);
  };

  return (
    <Styled.CardContainer>
      <img src={data.photo} alt="Imagem do café" loading="eager" />
      <div className="tags">
        {data?.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="content">
        <h1>{data?.name}</h1>
        <p>{data?.description}</p>
      </div>
      <div className="buy">
        <div className="buy__price">
          R$ <span>{convertNumberToCurrencyWithouthSymbol(data?.price)}</span>
        </div>
        <div className="buy__dashboard">
          <CounterButton
            value={quantity}
            getValue={handleQuantityProductInCart}
          />
          <button className="cart" onClick={handleClickAddProductInCart}>
            <ShoppingCartIcon size={22} weight="fill" />
          </button>
        </div>
      </div>
    </Styled.CardContainer>
  );
};
