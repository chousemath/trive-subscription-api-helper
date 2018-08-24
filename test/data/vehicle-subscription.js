"use strict";
exports.__esModule = true;
exports.goodVehicleSubscription = {
    id: 1,
    vehicleId: 1,
    subscriptionId: 1
};
exports.badVehicleSubscriptions = [
    {
        id: 1,
        vehicleId: null,
        subscriptionId: 1
    },
    {
        id: 1,
        vehicleId: undefined,
        subscriptionId: 1
    },
    {
        id: 1,
        vehicleId: NaN,
        subscriptionId: 1
    },
    {
        id: 1,
        vehicleId: 1,
        subscriptionId: null
    },
    {
        id: 1,
        vehicleId: 1,
        subscriptionId: undefined
    },
    {
        id: 1,
        vehicleId: 1,
        subscriptionId: NaN
    },
];
