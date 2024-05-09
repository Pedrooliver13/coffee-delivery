// Models
import { Coffee } from 'models/coffee';

// Reducers
import { CoffeeFormValues } from 'reducers/reducers';

export enum ActionTypes {
  ADD_PRODUCT_IN_CART = 'ADD_PRODUCT_IN_CART',
  SUBMIT_COFFEE_FORM = 'SUBMIT_COFFEE_FORM',
  UPDATE_QUANTITY_PRODUCT_IN_CART = 'UPDATE_QUANTITY_PRODUCT_IN_CART',
  REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART',
  RESET_CART_STATE = 'RESET_CART_STATE',
}

export interface ActionResponse<T> {
  type: string;
  payload: {
    [name: string]: T;
  };
}

export const submitCoffeeFormAction = (
  formValues: CoffeeFormValues
): ActionResponse<CoffeeFormValues> => {
  return {
    type: ActionTypes.SUBMIT_COFFEE_FORM,
    payload: {
      formValues,
    },
  };
};

export const addNewCoffeeInCartAction = (
  product: Coffee
): ActionResponse<Coffee> => {
  return {
    type: ActionTypes.ADD_PRODUCT_IN_CART,
    payload: {
      product,
    },
  };
};

export const updateQuantityCoffeeInCartAction = ({
  id,
  quantity,
}: {
  id: number;
  quantity: number;
}): ActionResponse<number> => {
  return {
    type: ActionTypes.UPDATE_QUANTITY_PRODUCT_IN_CART,
    payload: {
      id,
      quantity,
    },
  };
};

export const removeCoffeeFromCartAction = (
  id: number
): ActionResponse<number> => {
  return {
    type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: {
      id,
    },
  };
};

export const resetCartStateAction = (): ActionResponse<void> => {
  return {
    type: ActionTypes.RESET_CART_STATE,
    payload: {},
  };
};
