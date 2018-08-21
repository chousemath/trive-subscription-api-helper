export enum PaymentMethod {
  CreditCard = 1,
  Vbank = 2,
  Phone = 3
}

export enum PaymentCategory {
  SubscriptionFee = 1,
  MaintenanceFee = 2,
  DistanceLimitFee = 3
}

export enum PaymentStatus {
  Cancelled = 1,
  Pending = 2,
  Complete = 3,
  CancellationRequested = 4,
  CancellationRejected = 5
}

export const PaymentRequired: Array<string> = [
  'merchantId',
  'amount',
  'paymentMethod',
  'category',
  'status',
  'description',
  'billingKey',
];

export interface Payment {
  id?: number; // primary key of this particular payment
  vbankName?: string; // specific to vbank users
  vbankNumber?: string; // specific to vbank users
  createdAt?: number; // unix timestamp in seconds
  updatedAt?: number; // unix timestamp in seconds
  merchantId: string; // provided by iamport
  amount: number; // actual amount of the payment
  paymentMethod: number; // please refer to PaymentMethod above
  category: number; // please refer to PaymentCategory above
  status: number; // please refer to PaymentStatus above
  description: string;
  billingKey: string; // billing key provided by iamport
}
