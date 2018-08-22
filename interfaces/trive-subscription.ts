export enum SubscriptionStatus {
  Requested = 1, // initial request by customer for a subscription
  Approved = 2, // admin has reviewed all request details and approved the request
  Rejected = 3, // admin has reviewed all request details and rejected the request
  Active = 4, // the subscription is currently in progress
  Completed = 5, // the subscription time period has past and is completed (not-renewed)
  Cancelled = 6, // the subscription has been cancelled by the user for some reason
  Suspended = 7 // the subscription has been suspended by an admin for some violation of policy
}

// km packages in km/Month
export enum KmPackage {
  Month1300 = 1,
  Month2000 = 2,
  Month2600 = 3,
  Month3300 = 4
}

export enum DeliveryOption {
  Pickup = 1,
  Delivery = 2
}

export const SubscriptionRequired: Array<string> = [
  'kmPackage',
  'deliveryOption',
  'status',
  'startDate',
  'endDate',
];

export interface TriveSubscription {
  id?: number;
  kmPackage: number; // please refer to the KmPackage enum above
  deliveryOption: number; // please refer to the DeliveryOption enum above
  status: number; // please refer to the SubscriptionStatus enum above
  startDate: number; // unix timestamp in seconds
  endDate: number; // unix timestamp in seconds
}
