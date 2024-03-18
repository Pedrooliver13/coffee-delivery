// Packages
import { useContext } from 'react';

// Contexts
import { CartContext, CartContextProps } from 'contexts/cartContext';

export const useCart = (): CartContextProps => useContext(CartContext);
