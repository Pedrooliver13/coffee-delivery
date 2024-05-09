// Packages
import { useContext } from 'react';

// Contexts
import { GlobalContext, GlobalContextProps } from 'contexts/globalContext';

export const useGlobalContext = (): GlobalContextProps =>
  useContext(GlobalContext);
