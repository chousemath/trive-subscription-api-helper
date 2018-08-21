"use strict";
exports.__esModule = true;
exports.goodUserSubscription = {
    id: 1,
    userId: 1,
    subscriptionId: 1
};
exports.badUserSubscriptions = [
    {
        id: 1,
        userId: null,
        subscriptionId: 1
    },
    {
        id: 1,
        userId: undefined,
        subscriptionId: 1
    },
    {
        id: 1,
        userId: NaN,
        subscriptionId: 1
    },
    {
        id: 1,
        userId: 1,
        subscriptionId: null
    },
    {
        id: 1,
        userId: 1,
        subscriptionId: undefined
    },
    {
        id: 1,
        userId: 1,
        subscriptionId: NaN
    },
];
