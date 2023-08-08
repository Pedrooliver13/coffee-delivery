// Packages
import { ReactElement } from 'react';

// Assets
import CoffeeCupImage from 'assets/coffee-cup.svg';

// Styles
import * as Styled from './styles';

export const Home = (): ReactElement => {
  return (
    <Styled.HomeContainer>
      <Styled.HomeContent className="container">
        <div className="info">
          <h1 className="title">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>

        <img src={CoffeeCupImage} alt="Copo de café" />
      </Styled.HomeContent>
    </Styled.HomeContainer>
  );
};
