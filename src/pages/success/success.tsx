// Packages
import { ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MapPin as MapPinIcon,
  Timer as TimerIcon,
  CurrencyDollar as CurrencyDollarIcon,
} from 'phosphor-react';

// Hooks
import { useGlobalContext } from 'hooks/useGlobalContext';

// Assets
import MotoBoyImage from 'assets/motoboy.svg';

// Models
import { EPaymentMethods } from 'models/coffee';

// Styles
import * as Styled from './styles';

export const Success = (): ReactElement => {
  const { coffeeForm } = useGlobalContext();
  const navigate = useNavigate();

  const paymentTypesName: { [key: string]: string } = {
    [EPaymentMethods.DEBIT_CARD]: 'Cartão de débito',
    [EPaymentMethods.CREDIT_CARD]: 'Cartão de crédito',
    [EPaymentMethods.MONEY]: 'Dinheiro',
  };

  useEffect(() => {
    if (!coffeeForm.addressNumber) {
      navigate('/');
    }
  }, [coffeeForm, navigate]);

  return (
    <Styled.SuccessContainer className="container">
      <div className="success">
        <header className="success__header">
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </header>

        <div className="info">
          <div className="info__content">
            <Styled.ItemList variant="purple">
              <div className="icon">
                <MapPinIcon size={22} weight="fill" />
              </div>
              <p>
                Entrega em{' '}
                <span>
                  {coffeeForm?.street}, {coffeeForm?.addressNumber}
                </span>{' '}
                <br /> {coffeeForm?.neighborhood} - {coffeeForm?.city},{' '}
                {coffeeForm?.uf}
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
                <br />{' '}
                <span>{paymentTypesName?.[coffeeForm?.paymentMethod]}</span>
              </p>
            </Styled.ItemList>
          </div>
        </div>
      </div>

      <img src={MotoBoyImage} alt="Motoboy image" />
    </Styled.SuccessContainer>
  );
};
