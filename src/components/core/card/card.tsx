// Packages
import { ReactElement } from 'react';
import { toast } from 'react-toastify';
import {
  Minus as MinusIcon,
  Plus as PlusIcon,
  ShoppingCart as ShoppingCartIcon,
} from 'phosphor-react';

// Styles
import * as Styled from './styles';

// Assets
import CoffeeImage from 'assets/coffe-card.svg';

export const Card = (): ReactElement => {
  return (
    <Styled.CardContainer>
      <img src={CoffeeImage} alt="Imagem do café" />
      <div className="tags">
        <span>TRADICIONAL</span>
        <span>COM LEITE</span>
      </div>
      <div className="content">
        <h1>Expresso Tradicional</h1>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </div>
      <div className="buy">
        <div className="buy__price">
          R$ <span>9,90</span>
        </div>

        <div className="buy__dashboard">
          <div className="counter">
            <div className="minus">
              <MinusIcon size={14} />
            </div>

            <div className="value">1</div>

            <div className="more">
              <PlusIcon size={14} />
            </div>
          </div>
          <button
            className="cart"
            onClick={() => toast.info('Ativei', { theme: 'dark' })}
          >
            <ShoppingCartIcon size={22} weight="fill" />
          </button>
        </div>
      </div>
    </Styled.CardContainer>
  );
};
