import { UserSubscription } from "../../interfaces/user-subscription";

export const goodUserSubscription: UserSubscription = {
  id: 1,
  userId: 1,
  subscriptionId: 1,
};

export const badUserSubscriptions: Array<UserSubscription> = [
  {
    id: 1,
    userId: null,
    subscriptionId: 1,
  },
  {
    id: 1,
    userId: undefined,
    subscriptionId: 1,
  },
  {
    id: 1,
    userId: NaN,
    subscriptionId: 1,
  },
  {
    id: 1,
    userId: 1,
    subscriptionId: null,
  },
  {
    id: 1,
    userId: 1,
    subscriptionId: undefined,
  },
  {
    id: 1,
    userId: 1,
    subscriptionId: NaN,
  },
];