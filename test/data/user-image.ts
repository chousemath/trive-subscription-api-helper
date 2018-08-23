import { UserImage } from "../../interfaces/user-image";

export const goodUserImage: UserImage = {
  userId: 1,
  category: 1,
  url: '1234.jpg',
};

export const badUserImages: Array<UserImage> = [
  {
    userId: null,
    category: 1,
    url: '1234.jpg',
  },
  {
    userId: undefined,
    category: 1,
    url: '1234.jpg',
  },
  {
    userId: NaN,
    category: 1,
    url: '1234.jpg',
  },
  {
    userId: 1,
    category: null,
    url: '1234.jpg',
  },
  {
    userId: 1,
    category: undefined,
    url: '1234.jpg',
  },
  {
    userId: 1,
    category: NaN,
    url: '1234.jpg',
  },
  {
    userId: 1,
    category: 1,
    url: null,
  },
  {
    userId: 1,
    category: 1,
    url: undefined,
  },
  {
    userId: 1,
    category: 1,
    url: '1234.pdf',
  },
];