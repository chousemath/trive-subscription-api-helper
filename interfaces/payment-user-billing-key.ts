export const PaymentUserBillingKeyRequired: Array<string> = [
  'status',
  'paymentId',
  'userBillingKeyId',
];

export interface PaymentUserBillingKey {
  id?: number,
  status?: number,
  paymentId: number,
  userBillingKeyId: number,
}