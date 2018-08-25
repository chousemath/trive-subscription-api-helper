import { PaymentSubscription } from "../../interfaces/payment-subscription";

export const goodPaymentSubscription: PaymentSubscription = {
  id: 1,
  paymentId: 1,
  subscriptionId: 1,
};

export const badPaymentSubscriptions: Array<PaymentSubscription> = [
  {
    id: 1,
    paymentId: null,
    subscriptionId: 1,
  },
  {
    id: 1,
    paymentId: undefined,
    subscriptionId: 1,
  },
  {
    id: 1,
    paymentId: NaN,
    subscriptionId: 1,
  },
  {
    id: 1,
    paymentId: 1,
    subscriptionId: null,
  },
  {
    id: 1,
    paymentId: 1,
    subscriptionId: undefined,
  },
  {
    id: 1,
    paymentId: 1,
    subscriptionId: NaN,
  },
];