// Packages
import { ReactElement } from 'react';

// Assets
import CoffeeDeliveryLogo from 'assets/coffee-delivery-logo.svg';

// Styles
import * as Styled from './styles';

export const Header = (): ReactElement => {
  return (
    <Styled.HeaderContainer className="container">
      <img
        src={CoffeeDeliveryLogo}
        alt="Desenho de um copo de café, com um letreiro escrito coffee delivery"
      />
    </Styled.HeaderContainer>
  );
};
