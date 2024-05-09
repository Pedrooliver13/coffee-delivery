// Packages
import { ReactElement } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { useHookFormMask } from 'use-mask-input';
import {
  MapPinLine as MapPinLineIcon,
  CurrencyDollar as CurrencyDollarIcon,
  CreditCard as CreditCardIcon,
  Bank as BankIcon,
  Money as MoneyIcon,
} from 'phosphor-react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

// Components
import { CardCart } from 'components/shared';
import {
  Input,
  RadioButton,
  Button,
  RadioButtonContainer,
} from 'components/core';

// Hooks
import { useGlobalContext } from 'hooks/useGlobalContext';

// Utils
import { EMasks } from 'utils/masks';
import { getCurrencyFormatted } from 'utils/functions';

// Models
import { EPaymentMethods } from 'models/coffee';

// Services
import { getAddressByCep } from 'services/cep';

// Styles
import * as Styled from './styles';

const newAddressSchema = zod.object({
  cep: zod.string({ message: 'Campo obrigatório' }).min(9, 'CEP inválido'),
  street: zod
    .string({ message: 'Campo obrigatório' })
    .min(1, 'Campo obrigatório'),
  complement: zod.string({ message: 'Campo obrigatório' }),
  uf: zod.string({ message: 'Campo obrigatório' }).min(1, 'Campo obrigatório'),
  addressNumber: zod
    .string({ message: 'Campo obrigatório' })
    .min(1, 'Campo obrigatório'),

  neighborhood: zod
    .string({ message: 'Campo obrigatório' })
    .min(1, 'Campo obrigatório'),

  city: zod
    .string({ message: 'Campo obrigatório' })
    .min(1, 'Campo obrigatório'),

  paymentMethod: zod
    .string({ message: 'Campo obrigatório' })
    .min(1, 'Campo obrigatório'),
});

type FormValues = zod.infer<typeof newAddressSchema>;

export const Checkout = (): ReactElement => {
  const navigate = useNavigate();

  const {
    cartList,
    totalPriceCart,
    totalCartItems,
    submitCoffeeForm,
    resetCartState,
    isDisabledConfirmButton,
  } = useGlobalContext();

  const {
    register,
    control,
    setValue,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(newAddressSchema),
  });

  const registerWithMask = useHookFormMask(register);

  const handleBlurCep = async (e: React.FocusEvent<HTMLInputElement>) => {
    const cepRegex = /^[0-9]{5}-[0-9]{3}$/;

    if (cepRegex.test(e?.target.value)) {
      const response = await getAddressByCep(e?.target?.value);

      setValue('street', response?.logradouro);
      setValue('neighborhood', response?.bairro);
      setValue('city', response?.localidade);
      setValue('uf', response?.uf);

      setError('street', { message: '' });
      setError('neighborhood', { message: '' });
      setError('city', { message: '' });
      setError('uf', { message: '' });
    }
  };

  const handleConfirm = (data: FormValues): void => {
    if (!cartList.length) {
      return;
    }

    toast.success('Pedido confirmado com sucesso!', { theme: 'dark' });
    navigate('/success');
    submitCoffeeForm(data);
    resetCartState();
  };

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
              id="cep"
              label="CEP"
              autoComplete="off"
              error={errors?.cep?.message}
              {...registerWithMask('cep', [EMasks.CEP], {
                onBlur: handleBlurCep,
              })}
            />
            <Input
              id="street"
              label="Rua"
              className="col-span-3"
              error={errors?.street?.message}
              {...register('street')}
            />
            <Input
              id="addressNumber"
              label="Número"
              error={errors?.addressNumber?.message}
              {...register('addressNumber')}
            />
            <Input
              id="complement"
              label="Complemento"
              className="col-span-2"
              error={errors?.complement?.message}
              {...register('complement')}
            />
            <Input
              id="neighborhood"
              label="Bairro"
              error={errors?.neighborhood?.message}
              {...register('neighborhood')}
            />
            <Input
              id="city"
              label="Cidade"
              error={errors?.city?.message}
              {...register('city')}
            />
            <Input
              id="uf"
              label="UF"
              maxLength={2}
              error={errors?.uf?.message}
              {...register('uf')}
            />
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
                key={EPaymentMethods.CREDIT_CARD}
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                render={({ field: { ref, ...rest } }) => (
                  <RadioButtonContainer
                    key={String(ref)}
                    error={errors.paymentMethod?.message}
                  >
                    <RadioButton
                      {...rest}
                      label="CARTÃO DE CRÉDITO"
                      starticon={<CreditCardIcon size={16} />}
                      value={EPaymentMethods.CREDIT_CARD}
                      checked={
                        String(rest.value) === EPaymentMethods.CREDIT_CARD
                      }
                    />
                    <RadioButton
                      {...rest}
                      label="CARTÃO DE DÉBITO"
                      starticon={<BankIcon size={16} />}
                      value={EPaymentMethods.DEBIT_CARD}
                      checked={
                        String(rest.value) === EPaymentMethods.DEBIT_CARD
                      }
                    />
                    <RadioButton
                      {...rest}
                      label="DINHEIRO"
                      starticon={<MoneyIcon size={16} />}
                      value={EPaymentMethods.MONEY}
                      checked={String(rest.value) === EPaymentMethods.MONEY}
                    />
                  </RadioButtonContainer>
                )}
              />
            </div>
          </div>
        </form>
      </div>

      <Styled.CoffeesSelected>
        <h2 className="title">Cafés selecionados</h2>

        <form className="form" onSubmit={handleSubmit(handleConfirm)}>
          <div className="form__itens">
            {cartList.map((product) => (
              <CardCart key={product.id} data={product} />
            ))}
          </div>

          <div className="form__content">
            <div>
              <p>Total de itens</p>
              <span>{totalCartItems}</span>
            </div>
            <div>
              <p>Entrega</p>
              <span>R$ 0,00</span>
            </div>

            <div className="form__content--total">
              <span>Total</span>
              <span>{getCurrencyFormatted(totalPriceCart)}</span>
            </div>
          </div>

          <div className="form__footer">
            <Button
              type="submit"
              className="form__footer--submit"
              disabled={isDisabledConfirmButton}
            >
              Confirmar pedido
            </Button>
          </div>
        </form>
      </Styled.CoffeesSelected>
    </Styled.CheckoutContainer>
  );
};
