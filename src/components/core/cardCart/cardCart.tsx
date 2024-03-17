// Packages
import { ReactElement } from 'react';
import { Trash as TrashIcon } from 'phosphor-react';

// Components
import { CounterButton, Button } from 'components/core';

// Assets
import CoffeeImage from 'assets/coffe-card.svg';

// Styles
import * as Styled from './styles';

export const CardCart = (): ReactElement => {
  return (
    <Styled.CardCartContainer>
      <img src={CoffeeImage} alt="Xícara de café" />

      <div className="content">
        <header className="content__header">
          <h3 className="content__header--title">Expresso Tradicional</h3>

          <span className="content__header--price">R$ 9,90</span>
        </header>

        <div className="content__footer">
          <CounterButton />
          <Button variant="secondary" starticon={<TrashIcon size={16} />}>
            Remover
          </Button>
        </div>
      </div>
    </Styled.CardCartContainer>
  );
};
