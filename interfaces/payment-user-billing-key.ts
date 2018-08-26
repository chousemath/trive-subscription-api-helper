export const PaymentUserBillingKeyRequired: Array<string> = [
  'paymentId',
  'userBillingKeyId',
];

export interface PaymentUserBillingKey {
  id?: number,
  status?: number,
  paymentId: number,
  userBillingKeyId: number,
}