import { PaymentUserBillingKey } from "../../interfaces/payment-user-billing-key";

export const goodPaymentUserBillingKey: PaymentUserBillingKey = {
  id: 1,
  paymentId: 1,
  userBillingKeyId: 1,
  status: 1,
};

export const badPaymentUserBillingKeys: Array<PaymentUserBillingKey> = [
  {
    id: 1,
    paymentId: null,
    userBillingKeyId: 1,
    status: 1,
  },
  {
    id: 1,
    paymentId: undefined,
    userBillingKeyId: 1,
    status: 1,
  },
  {
    id: 1,
    paymentId: NaN,
    userBillingKeyId: 1,
    status: 1,
  },
  {
    id: 1,
    paymentId: 1,
    userBillingKeyId: null,
    status: 1,
  },
  {
    id: 1,
    paymentId: 1,
    userBillingKeyId: undefined,
    status: 1,
  },
  {
    id: 1,
    paymentId: 1,
    userBillingKeyId: NaN,
    status: 1,
  },
];