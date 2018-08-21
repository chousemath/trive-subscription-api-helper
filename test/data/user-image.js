"use strict";
exports.__esModule = true;
exports.goodUserImage = {
    userId: 1,
    category: 1,
    license_image: '1234.jpg'
};
exports.badUserImages = [
    {
        userId: null,
        category: 1,
        license_image: '1234.jpg'
    },
    {
        userId: undefined,
        category: 1,
        license_image: '1234.jpg'
    },
    {
        userId: NaN,
        category: 1,
        license_image: '1234.jpg'
    },
    {
        userId: 1,
        category: null,
        license_image: '1234.jpg'
    },
    {
        userId: 1,
        category: undefined,
        license_image: '1234.jpg'
    },
    {
        userId: 1,
        category: NaN,
        license_image: '1234.jpg'
    },
    {
        userId: 1,
        category: 1,
        license_image: null
    },
    {
        userId: 1,
        category: 1,
        license_image: undefined
    },
    {
        userId: 1,
        category: 1,
        license_image: '1234.pdf'
    },
];
