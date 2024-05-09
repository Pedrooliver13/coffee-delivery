// Packages
import {
  ReactElement,
  createContext,
  useReducer,
  useMemo,
  useEffect,
} from 'react';

// Models
import { Coffee } from 'models/coffee';

// Reducers
import { CoffeeFormValues, coffeeReducer } from 'reducers/reducers';
import {
  submitCoffeeFormAction,
  addNewCoffeeInCartAction,
  updateQuantityCoffeeInCartAction,
  removeCoffeeFromCartAction,
  resetCartStateAction,
} from 'reducers/actions';

export interface GlobalContextProps {
  cartList: Coffee[];
  coffeeForm: CoffeeFormValues;
  totalPriceCart: number;
  totalCartItems: number;
  isDisabledConfirmButton: boolean;
  submitCoffeeForm: (formValues: CoffeeFormValues) => void;
  addNewCoffeeInCart: (product: Coffee) => void;
  removeCoffeeFromCart: (id: number) => void;
  updateQuantityCoffeeInCart: (props: { id: number; quantity: number }) => void;
  resetCartState: () => void;
}

interface GlobalProviderProps {
  children: ReactElement;
}

const GlobalContext = createContext({} as GlobalContextProps);

const GlobalContextProvider = ({
  children,
}: GlobalProviderProps): ReactElement => {
  const [coffeeState, dispatch] = useReducer(
    coffeeReducer,
    {
      cartList: [],
      coffeeForm: {
        street: '',
        addressNumber: '',
        complement: '',
        neighborhood: '',
        city: '',
        uf: '',
        paymentMethod: '',
      },
    },
    (initialState) => {
      const storedStateAsJson = localStorage.getItem(
        '@coffee-delivery:coffee-state-1.0.0'
      );

      if (storedStateAsJson) {
        return JSON.parse(storedStateAsJson);
      }

      return initialState;
    }
  );

  useEffect(() => {
    const stateJson = JSON.stringify(coffeeState);

    localStorage.setItem('@coffee-delivery:coffee-state-1.0.0', stateJson);
  }, [coffeeState]);

  const { cartList, coffeeForm } = coffeeState;

  const totalCartItems = useMemo(() => {
    return cartList.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
  }, [cartList]);

  const totalPriceCart = useMemo(() => {
    return cartList.reduce(
      (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
      0
    );
  }, [cartList]);

  const isDisabledConfirmButton = useMemo(() => !cartList.length, [cartList]);

  const submitCoffeeForm = (formValues: CoffeeFormValues) => {
    dispatch(submitCoffeeFormAction(formValues));
  };

  const addNewCoffeeInCart = (product: Coffee): void => {
    dispatch(addNewCoffeeInCartAction(product));
  };

  const updateQuantityCoffeeInCart = (product: {
    id: number;
    quantity: number;
  }): void => {
    dispatch(
      updateQuantityCoffeeInCartAction({
        id: product?.id,
        quantity: product?.quantity,
      })
    );
  };

  const removeCoffeeFromCart = (id: number): void => {
    dispatch(removeCoffeeFromCartAction(id));
  };

  const resetCartState = () => {
    dispatch(resetCartStateAction());
  };

  return (
    <GlobalContext.Provider
      value={{
        cartList,
        coffeeForm,
        totalPriceCart,
        totalCartItems,
        submitCoffeeForm,
        addNewCoffeeInCart,
        updateQuantityCoffeeInCart,
        removeCoffeeFromCart,
        resetCartState,
        isDisabledConfirmButton,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
