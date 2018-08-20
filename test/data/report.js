"use strict";
exports.__esModule = true;
exports.goodReport = {
    userId: 1,
    vehicleId: 1,
    category: 1,
    title: 'a',
    description: 'b'
};
exports.badReports = [
    {
        userId: null,
        vehicleId: 1,
        category: 1,
        title: 'a',
        description: 'b'
    },
    {
        userId: 1,
        vehicleId: null,
        category: 1,
        title: 'a',
        description: 'b'
    },
    {
        userId: 1,
        vehicleId: 1,
        category: null,
        title: 'a',
        description: 'b'
    },
    {
        userId: 1,
        vehicleId: 1,
        category: 1,
        title: null,
        description: 'b'
    },
    {
        userId: 1,
        vehicleId: 1,
        category: 1,
        title: 'a',
        description: null
    },
    {
        userId: undefined,
        vehicleId: 1,
        category: 1,
        title: 'a',
        description: 'b'
    },
    {
        userId: 1,
        vehicleId: undefined,
        category: 1,
        title: 'a',
        description: 'b'
    },
    {
        userId: 1,
        vehicleId: 1,
        category: undefined,
        title: 'a',
        description: 'b'
    },
    {
        userId: 1,
        vehicleId: 1,
        category: 1,
        title: undefined,
        description: 'b'
    },
    {
        userId: 1,
        vehicleId: 1,
        category: 1,
        title: 'a',
        description: undefined
    },
];
