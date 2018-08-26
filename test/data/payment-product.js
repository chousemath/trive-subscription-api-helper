"use strict";
exports.__esModule = true;
exports.goodPaymentProduct = {
    id: 1,
    paymentId: 1,
    productId: 1,
    quantity: 1
};
exports.badPaymentProducts = [
    {
        id: 1,
        paymentId: null,
        productId: 1,
        quantity: 1
    },
    {
        id: 1,
        paymentId: undefined,
        productId: 1,
        quantity: 1
    },
    {
        id: 1,
        paymentId: NaN,
        productId: 1,
        quantity: 1
    },
    {
        id: 1,
        paymentId: 1,
        productId: null,
        quantity: 1
    },
    {
        id: 1,
        paymentId: 1,
        productId: undefined,
        quantity: 1
    },
    {
        id: 1,
        paymentId: 1,
        productId: NaN,
        quantity: 1
    },
    {
        id: 1,
        paymentId: 1,
        productId: 1,
        quantity: null
    },
    {
        id: 1,
        paymentId: 1,
        productId: 1,
        quantity: undefined
    },
    {
        id: 1,
        paymentId: 1,
        productId: 1,
        quantity: NaN
    },
];
