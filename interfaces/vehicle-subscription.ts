export const VehicleSubscriptionRequired: Array<string> = [
  'vehicleId',
  'subscriptionId',
];

export interface VehicleSubscription {
  id?: number; // primary key of the user subscription model record
  vehicleId: number; // primary key of the vehicle model record (used as foreign key here)
  subscriptionId: number; // primary key of the subscription model record (used as foreign key here)
}