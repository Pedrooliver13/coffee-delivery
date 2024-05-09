// Packages
import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import {
  MapPin as MapPinIcon,
  ShoppingCart as ShoppingCartIcon,
} from 'phosphor-react';

// Hooks
import { useGlobalContext } from 'hooks/useGlobalContext';

// Assets
import CoffeeDeliveryLogo from 'assets/coffee-delivery-logo.svg';

// Styles
import * as Styled from './styles';

export const Header = (): ReactElement => {
  const { totalCartItems } = useGlobalContext();
  const isShowBadge = totalCartItems > 0;

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
          {isShowBadge && <span className="cart__count">{totalCartItems}</span>}
          <ShoppingCartIcon size={22} weight="fill" />
        </NavLink>
      </Styled.HeaderDashboard>
    </Styled.HeaderContainer>
  );
};
