// Packages
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useHookFormMask } from 'use-mask-input';
import {
  MapPinLine as MapPinLineIcon,
  CurrencyDollar as CurrencyDollarIcon,
} from 'phosphor-react';

// Components
import { Input } from 'components/core';

import { EMasks } from 'utils/masks';

// Styles
import * as Styled from './styles';

export const Checkout = (): ReactElement => {
  const { register } = useForm();
  const registerWithMask = useHookFormMask(register);

  return (
    <Styled.CheckoutContainer className="container">
      <div className="forms">
        <h2 className="title">Complete seu pedido</h2>

        <form>
          <div className="forms__address">
            <header className="forms__address--header col-span-3">
              <MapPinLineIcon size={22} />

              <div>
                <h1>Endereço de Entrega</h1>
                <span>Informe o endereço onde deseja receber o pedido</span>
              </div>
            </header>

            <Input label="CEP" {...registerWithMask('cep', [EMasks.CEP])} />
            <Input label="Rua" name="street" className="col-span-3" />
            <Input label="Número" name="addressNumber" />
            <Input
              label="Complemento"
              name="addressNumber"
              className="col-span-2"
            />
            <Input label="Bairro" name="neighborhood" />
            <Input label="Cidade" name="city" />
            <Input label="UF" name="uf" maxLength={2} />
          </div>
          <div className="forms__payment">
            <header className="forms__payment--header col-span-3">
              <CurrencyDollarIcon size={22} />

              <div>
                <h1>Pagamento</h1>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </header>
          </div>
        </form>
      </div>

      <div className="coffees__selected">
        <h2 className="title">Cafés selecionados</h2>

        <p className="coffees__selected--form">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam quis
          perspiciatis nobis, voluptatem consequatur suscipit quidem voluptas,
          vero veniam voluptatum dolores tenetur impedit magni, fuga
          voluptatibus aspernatur nemo dolorem quae!
        </p>
      </div>
    </Styled.CheckoutContainer>
  );
};
