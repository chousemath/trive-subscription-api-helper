"use strict";
exports.__esModule = true;
exports.goodSubscription = {
    id: 1,
    kmPackage: 1,
    deliveryOption: 1,
    status: 1,
    startDate: 1,
    endDate: 2
};
exports.badSubscriptions = [
    {
        kmPackage: null,
        deliveryOption: 1,
        status: 1,
        startDate: 1,
        endDate: 2
    },
    {
        kmPackage: undefined,
        deliveryOption: 1,
        status: 1,
        startDate: 1,
        endDate: 2
    },
    {
        kmPackage: NaN,
        deliveryOption: 1,
        status: 1,
        startDate: 1,
        endDate: 2
    },
    {
        kmPackage: 1,
        deliveryOption: null,
        status: 1,
        startDate: 1,
        endDate: 2
    },
    {
        kmPackage: 1,
        deliveryOption: undefined,
        status: 1,
        startDate: 1,
        endDate: 2
    },
    {
        kmPackage: 1,
        deliveryOption: NaN,
        status: 1,
        startDate: 1,
        endDate: 2
    },
    {
        kmPackage: 1,
        deliveryOption: 1,
        status: null,
        startDate: 1,
        endDate: 2
    },
    {
        kmPackage: 1,
        deliveryOption: 1,
        status: undefined,
        startDate: 1,
        endDate: 2
    },
    {
        kmPackage: 1,
        deliveryOption: 1,
        status: NaN,
        startDate: 1,
        endDate: 2
    },
    {
        kmPackage: 1,
        deliveryOption: 1,
        status: 1,
        startDate: null,
        endDate: 2
    },
    {
        kmPackage: 1,
        deliveryOption: 1,
        status: 1,
        startDate: undefined,
        endDate: 2
    },
    {
        kmPackage: 1,
        deliveryOption: 1,
        status: 1,
        startDate: NaN,
        endDate: 2
    },
    {
        kmPackage: 1,
        deliveryOption: 1,
        status: 1,
        startDate: 1,
        endDate: null
    },
    {
        kmPackage: 1,
        deliveryOption: 1,
        status: 1,
        startDate: 1,
        endDate: undefined
    },
    {
        kmPackage: 1,
        deliveryOption: 1,
        status: 1,
        startDate: 1,
        endDate: NaN
    },
    {
        kmPackage: 1,
        deliveryOption: 1,
        status: 1,
        startDate: 2,
        endDate: 1
    },
];
