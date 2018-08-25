"use strict";
exports.__esModule = true;
exports.goodVehicleImage = {
    vehicleId: 1,
    order: 1,
    url: '1234.jpg'
};
exports.badVehicleImages = [
    {
        vehicleId: null,
        order: 1,
        url: '1234.jpg'
    },
    {
        vehicleId: undefined,
        order: 1,
        url: '1234.jpg'
    },
    {
        vehicleId: NaN,
        order: 1,
        url: '1234.jpg'
    },
    {
        vehicleId: 1,
        order: null,
        url: '1234.jpg'
    },
    {
        vehicleId: 1,
        order: undefined,
        url: '1234.jpg'
    },
    {
        vehicleId: 1,
        order: NaN,
        url: '1234.jpg'
    },
    {
        vehicleId: 1,
        order: 1,
        url: null
    },
    {
        vehicleId: 1,
        order: 1,
        url: undefined
    },
    {
        vehicleId: 1,
        order: 1,
        url: '1234.pdf'
    },
];
