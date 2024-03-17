// Packages
import { ReactElement } from 'react';
import {
  MapPin as MapPinIcon,
  Timer as TimerIcon,
  CurrencyDollar as CurrencyDollarIcon,
} from 'phosphor-react';

// Assets
import MotoBoyImage from 'assets/motoboy.svg';

// Styles
import * as Styled from './styles';

export const Success = (): ReactElement => {
  return (
    <Styled.SuccessContainer className="container">
      <div className="info">
        <div className="info__content">
          <Styled.ItemList variant="purple">
            <div className="icon">
              <MapPinIcon size={22} weight="fill" />
            </div>
            <p>
              Entrega em <span>Rua João Daniel Martinelli, 102</span> <br />{' '}
              Farrapos - Porto Alegre, RS
            </p>
          </Styled.ItemList>

          <Styled.ItemList variant="yellow">
            <div className="icon">
              <TimerIcon size={22} weight="fill" />
            </div>
            <p>
              Previsão de entrega <br /> <span>20 min - 30 min</span>
            </p>
          </Styled.ItemList>
          <Styled.ItemList variant="yellow-dark">
            <div className="icon">
              <CurrencyDollarIcon size={22} weight="fill" />
            </div>
            <p>
              Pagamento na entrega
              <br /> <span>Cartão de Crédito</span>
            </p>
          </Styled.ItemList>
        </div>
      </div>

      <img src={MotoBoyImage} alt="Motoboy image" />
    </Styled.SuccessContainer>
  );
};
