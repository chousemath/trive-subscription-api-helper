import { UserBillingKey } from "../../interfaces/user-billing-key";

export const goodUserBillingKey: UserBillingKey = {
  id: 1,
  userId: 1,
  billingKey: '1',
};

export const badUserBillingKeys: Array<UserBillingKey> = [
  {
    id: 1,
    userId: null,
    billingKey: '1',
  },
  {
    id: 1,
    userId: undefined,
    billingKey: '1',
  },
  {
    id: 1,
    userId: NaN,
    billingKey: '1',
  },
  {
    id: 1,
    userId: 1,
    billingKey: null,
  },
  {
    id: 1,
    userId: 1,
    billingKey: undefined,
  },
];