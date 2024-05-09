export const getCurrencyFormatted = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value || 0);
};

export const convertNumberToCurrencyWithouthSymbol = (
  value: number
): string => {
  return Number(value).toFixed(2).replace('.', ',');
};
