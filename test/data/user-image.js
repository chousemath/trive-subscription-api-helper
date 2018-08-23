"use strict";
exports.__esModule = true;
exports.goodUserImage = {
    userId: 1,
    category: 1,
    url: '1234.jpg'
};
exports.badUserImages = [
    {
        userId: null,
        category: 1,
        url: '1234.jpg'
    },
    {
        userId: undefined,
        category: 1,
        url: '1234.jpg'
    },
    {
        userId: NaN,
        category: 1,
        url: '1234.jpg'
    },
    {
        userId: 1,
        category: null,
        url: '1234.jpg'
    },
    {
        userId: 1,
        category: undefined,
        url: '1234.jpg'
    },
    {
        userId: 1,
        category: NaN,
        url: '1234.jpg'
    },
    {
        userId: 1,
        category: 1,
        url: null
    },
    {
        userId: 1,
        category: 1,
        url: undefined
    },
    {
        userId: 1,
        category: 1,
        url: '1234.pdf'
    },
];
