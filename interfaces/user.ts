import { UserImage } from './user-image';

export const UserRequired: Array<string> = [
  'name',
  'phone',
  'email',
  'birthYear',
  'birthMonth',
  'birthDay',
  'status',
  'role',
];

export enum UserStatus {
  Unconfirmed = 1, // user's credit/driving history has not yet been reviewed and confirmed
  Confirmed = 2, // user's credit/driving history has been reviewed and confirmed
  Rejected = 3, // user's credit/driving history has been reviewed and rejected
  Deactivated = 4, // user or admin has deactivated this user's account
  Subscribed = 5, // user is currently in an active subscription
  Suspended = 6 // user subscription eligibility has been suspended due to misconduct
}

export enum Roles {
  Admin = 1,
  Member = 2
}

export interface User {
  id?: number; // integer primary key of this user
  name: string; // full name of the user
  phone: string; // phone number of the user
  email: string; // email address of the user
  birthYear: number; // year this user was born
  birthMonth: number; // month this user was born
  birthDay: number; // day this user was born
  subscriptionType?: number; // the particular subscription plan this user has paid for
  status: number; // current status of this user (refer to the Status enum above)
  role?: number; // role of this user
  token?: string; // session token for this user
}