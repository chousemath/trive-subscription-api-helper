import { VehicleSubscription } from "../../interfaces/vehicle-subscription";

export const goodVehicleSubscription: VehicleSubscription = {
  id: 1,
  vehicleId: 1,
  subscriptionId: 1,
};

export const badVehicleSubscriptions: Array<VehicleSubscription> = [
  {
    id: 1,
    vehicleId: null,
    subscriptionId: 1,
  },
  {
    id: 1,
    vehicleId: undefined,
    subscriptionId: 1,
  },
  {
    id: 1,
    vehicleId: NaN,
    subscriptionId: 1,
  },
  {
    id: 1,
    vehicleId: 1,
    subscriptionId: null,
  },
  {
    id: 1,
    vehicleId: 1,
    subscriptionId: undefined,
  },
  {
    id: 1,
    vehicleId: 1,
    subscriptionId: NaN,
  },
];