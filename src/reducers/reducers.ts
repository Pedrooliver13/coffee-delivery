/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

// Packages
import { produce } from 'immer';

// Models
import { Coffee } from 'models/coffee';

// Reducers
import { ActionTypes } from 'reducers/actions';

export interface CoffeeFormValues {
  street: string;
  addressNumber: string;
  complement: string;
  neighborhood: string;
  city: string;
  uf: string;
  paymentMethod: string;
}

interface CartState {
  cartList: Coffee[];
  coffeeForm: CoffeeFormValues;
}

export const coffeeReducer = (state: CartState, action: any): CartState => {
  switch (action.type) {
    case ActionTypes.SUBMIT_COFFEE_FORM:
      return produce(state, (draft) => {
        draft.coffeeForm = action.payload.formValues;
      });

    case ActionTypes.ADD_PRODUCT_IN_CART:
      return produce(state, (draft) => {
        draft.cartList.push(action.payload.product);
      });

    case ActionTypes.UPDATE_QUANTITY_PRODUCT_IN_CART:
      return produce(state, (draft) => {
        const productIndex = draft.cartList.findIndex(
          (product) => product.id === action.payload.id
        );

        if (productIndex >= 0) {
          draft.cartList[productIndex].quantity = action.payload.quantity;
        }
      });

    case ActionTypes.REMOVE_PRODUCT_FROM_CART:
      return produce(state, (draft) => {
        const productIndex = draft.cartList.findIndex(
          (product) => product.id === action.payload.id
        );

        if (productIndex >= 0) {
          draft.cartList.splice(productIndex, 1);
        }
      });

    case ActionTypes.RESET_CART_STATE:
      return produce(state, (draft) => {
        draft.cartList = [];
      });

    default:
      return state;
  }
};
