export const UserSubscriptionRequired: Array<string> = [
  'userId',
  'subscriptionId',
];

export interface UserSubscription {
  id?: number; // primary key of the user subscription model record
  userId: number; // primary key of the user model record (used as foreign key here)
  subscriptionId: number; // primary key of the subscription model record (used as foreign key here)
}