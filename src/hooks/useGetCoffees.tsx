// Packages
import { useState, useEffect } from 'react';

// Models
import { Coffee } from 'models/coffee';

interface UseGetCoffeesReturn {
  data: Coffee[];
  isLoading: boolean;
}

export const useGetCoffees = (): UseGetCoffeesReturn => {
  const [data, setData] = useState<Coffee[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      'https://my-json-server.typicode.com/pedrooliver13/coffee-delivery-api/db',
      { cache: 'force-cache' }
    )
      .then((results) => results.json())
      .then((data) => setData(data?.coffees))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading };
};
