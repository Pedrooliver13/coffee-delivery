import { useState, useEffect } from 'react';

interface Coffee {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

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
