export interface Coffee {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: number;
  tags: string[];
  quantity: number;
}

export enum EPaymentMethods {
  CREDIT_CARD = '1',
  DEBIT_CARD = '2',
  MONEY = '3',
}
