// Packages
import { ReactElement } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useHookFormMask } from 'use-mask-input';
import {
  MapPinLine as MapPinLineIcon,
  CurrencyDollar as CurrencyDollarIcon,
  CreditCard as CreditCardIcon,
  Bank as BankIcon,
  Money as MoneyIcon,
} from 'phosphor-react';

// Components
import { Input, RadioButton, Button, CardCart } from 'components/core';

// Utils
import { EMasks } from 'utils/masks';

// Styles
import * as Styled from './styles';

enum EPaymentMethods {
  CREDIT_CARD = '1',
  DEBIT_CARD = '2',
  MONEY = '3',
}

export const Checkout = (): ReactElement => {
  const { register, control } = useForm();
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

            <Input
              label="CEP"
              autoComplete="off"
              {...registerWithMask('cep', [EMasks.CEP])}
            />
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

            <div className="forms__payment--list col-span-3">
              <Controller
                name="paymentMethod"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                  <>
                    <RadioButton
                      {...field}
                      label="CARTÃO DE CRÉDITO"
                      startIcon={<CreditCardIcon size={16} />}
                      value={EPaymentMethods.CREDIT_CARD}
                      checked={field.value === EPaymentMethods.CREDIT_CARD}
                    />
                    <RadioButton
                      {...field}
                      label="CARTÃO DE DÉBITO"
                      startIcon={<BankIcon size={16} />}
                      value={EPaymentMethods.DEBIT_CARD}
                      checked={field.value === EPaymentMethods.DEBIT_CARD}
                    />
                    <RadioButton
                      {...field}
                      label="DINHEIRO"
                      startIcon={<MoneyIcon size={16} />}
                      value={EPaymentMethods.MONEY}
                      checked={field.value === EPaymentMethods.MONEY}
                    />
                  </>
                )}
              />
            </div>
          </div>
        </form>
      </div>

      <div className="coffees__selected">
        <h2 className="title">Cafés selecionados</h2>

        <form className="form">
          <div className="form__itens">
            <CardCart />
            <CardCart />
          </div>

          <Button className="form__submit">Confirmar pedido</Button>
        </form>
      </div>
    </Styled.CheckoutContainer>
  );
};
