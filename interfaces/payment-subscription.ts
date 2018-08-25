export const PaymentSubscriptionRequired: Array<string> = [
  'paymentId',
  'subscriptionId',
];

export interface PaymentSubscription {
  id?: number;
  paymentId: number;
  subscriptionId: number;
}