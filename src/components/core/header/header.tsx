// Packages
import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import {
  MapPin as MapPinIcon,
  ShoppingCart as ShoppingCartIcon,
} from 'phosphor-react';

// Assets
import CoffeeDeliveryLogo from 'assets/coffee-delivery-logo.svg';

// Styles
import * as Styled from './styles';

export const Header = (): ReactElement => {
  return (
    <Styled.HeaderContainer className="container">
      <NavLink to={'/'}>
        <img
          src={CoffeeDeliveryLogo}
          alt="Desenho de um copo de café, com um letreiro escrito coffee delivery"
        />
      </NavLink>

      <Styled.HeaderDashboard>
        <div className="location">
          <MapPinIcon size={22} weight="fill" />
          Americana, SP
        </div>

        <NavLink to={'/checkout'} className="cart">
          <span className="cart__count">3</span>
          <ShoppingCartIcon size={22} weight="fill" />
        </NavLink>
      </Styled.HeaderDashboard>
    </Styled.HeaderContainer>
  );
};
