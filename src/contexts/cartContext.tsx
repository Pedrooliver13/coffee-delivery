// Packages
import { ReactElement, createContext } from 'react';

export interface CartContextProps {}

interface CartProviderProps {
  children: ReactElement;
}

const CartContext = createContext({} as CartContextProps);

const CartContextProvider = ({ children }: CartProviderProps): ReactElement => {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};

export { CartContext, CartContextProvider };
