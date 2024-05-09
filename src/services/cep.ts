// Packages
import { toast } from 'react-toastify';

// Models
import { Cep } from 'models/cep';

export const getAddressByCep = (cep: string): Promise<Cep> => {
  const cepWithoutMask = cep.replace(/\D/g, '');
  const toastId = toast.loading('Buscando endereço...', { theme: 'dark' });

  const response = fetch(`https://viacep.com.br/ws/${cepWithoutMask}/json/`)
    .then((results) => results.json())
    .then((data) => {
      if (data?.erro) {
        throw new Error('CEP não encontrado!');
      }

      toast.update(toastId, {
        render: 'Endereço encotrado com sucesso!',
        type: 'success',
        isLoading: false,
        autoClose: 3000,
      });

      return data;
    })
    .catch(() =>
      toast.update(toastId, {
        render: 'CEP não encontrado! 🥲',
        type: 'error',
        isLoading: false,
        autoClose: 3000,
      })
    );

  return response;
};
