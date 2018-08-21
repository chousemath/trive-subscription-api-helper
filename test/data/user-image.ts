import { UserImage } from "../../interfaces/user-image";

export const goodUserImage: UserImage = {
  userId: 1,
  category: 1,
  license_image: '1234.jpg',
};

export const badUserImages: Array<UserImage> = [
  {
    userId: null,
    category: 1,
    license_image: '1234.jpg',
  },
  {
    userId: undefined,
    category: 1,
    license_image: '1234.jpg',
  },
  {
    userId: NaN,
    category: 1,
    license_image: '1234.jpg',
  },
  {
    userId: 1,
    category: null,
    license_image: '1234.jpg',
  },
  {
    userId: 1,
    category: undefined,
    license_image: '1234.jpg',
  },
  {
    userId: 1,
    category: NaN,
    license_image: '1234.jpg',
  },
  {
    userId: 1,
    category: 1,
    license_image: null,
  },
  {
    userId: 1,
    category: 1,
    license_image: undefined,
  },
  {
    userId: 1,
    category: 1,
    license_image: '1234.pdf',
  },
];