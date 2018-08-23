export enum UserImageCategory {
  LicenseFront = 1,
  LicenseBack = 2
}

export const UserImageRequired: Array<string> = [
  'userId',
  'category',
  'url',
];

export interface UserImage {
  userId: number; // primary key of the user with which this image is associated
  category: number; // numeric representation of the category of this image
  url: string; // url of the image
}
