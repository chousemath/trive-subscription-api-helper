export const PaymentProductRequired: Array<string> = [
  'quantity',
  'paymentId',
  'productId',
];

export interface PaymentProduct {
  id?: number;
  quantity: number,
  paymentId: number,
  productId: number,
}