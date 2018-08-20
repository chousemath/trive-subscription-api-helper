"use strict";
exports.__esModule = true;
var ReportCategory;
(function (ReportCategory) {
    ReportCategory[ReportCategory["Accident"] = 1] = "Accident";
    ReportCategory[ReportCategory["Maintenance"] = 2] = "Maintenance";
    ReportCategory[ReportCategory["Cleaning"] = 3] = "Cleaning";
    ReportCategory[ReportCategory["Theft"] = 4] = "Theft";
})(ReportCategory = exports.ReportCategory || (exports.ReportCategory = {}));
exports.ReportRequired = [
    'userId',
    'vehicleId',
    'category',
    'title',
    'description',
];
