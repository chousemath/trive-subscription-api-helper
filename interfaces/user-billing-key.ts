export const UserBillingKeyRequired: Array<string> = [
  'userId',
  'billingKey',
];

export interface UserBillingKey {
  id?: number; // primary key of this user billing key
  userId: number; // primary key of the User
  billingKey: string; // identifier given by Iamport for each payment method
}
