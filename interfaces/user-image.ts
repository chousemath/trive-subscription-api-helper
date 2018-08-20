export enum UserImageCategory {
  LicenseFront = 1,
  LicenseBack = 2
}

export interface UserImage {
  userId: number; // primary key of the user with which this image is associated
  category: number; // numeric representation of the category of this image
  license_image: string; // url of the image
}
