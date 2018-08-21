"use strict";
exports.__esModule = true;
exports.goodUserBillingKey = {
    id: 1,
    userId: 1,
    billingKey: '1'
};
exports.badUserBillingKeys = [
    {
        id: 1,
        userId: null,
        billingKey: '1'
    },
    {
        id: 1,
        userId: undefined,
        billingKey: '1'
    },
    {
        id: 1,
        userId: NaN,
        billingKey: '1'
    },
    {
        id: 1,
        userId: 1,
        billingKey: null
    },
    {
        id: 1,
        userId: 1,
        billingKey: undefined
    },
];
