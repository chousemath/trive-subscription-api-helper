"use strict";
exports.__esModule = true;
var vehicle_1 = require("./interfaces/vehicle");
var user_1 = require("./interfaces/user");
var report_1 = require("./interfaces/report");
var nullOrUndef = function (value) { return value === null || value === undefined; };
var HelperReport;
(function (HelperReport) {
    // checks whether or not a report has all the attributes it needs to be a valid
    // database record
    HelperReport.valid = function (report) {
        for (var _i = 0, ReportRequired_1 = report_1.ReportRequired; _i < ReportRequired_1.length; _i++) {
            var key = ReportRequired_1[_i];
            if (nullOrUndef(report[key]))
                return false;
        }
        return true;
    };
})(HelperReport = exports.HelperReport || (exports.HelperReport = {}));
var HelperUser;
(function (HelperUser) {
    // checks whether or not a user has all the attributes it needs to be a valid
    // database record
    HelperUser.valid = function (user) {
        for (var _i = 0, UserRequired_1 = user_1.UserRequired; _i < UserRequired_1.length; _i++) {
            var key = UserRequired_1[_i];
            if (nullOrUndef(user[key]))
                return false;
        }
        return true;
    };
})(HelperUser = exports.HelperUser || (exports.HelperUser = {}));
var HelperVehicle;
(function (HelperVehicle) {
    // checks whether or not a vehicle has all the attributes it needs to be a valid
    // database record
    HelperVehicle.valid = function (vehicle) {
        for (var _i = 0, VehicleRequired_1 = vehicle_1.VehicleRequired; _i < VehicleRequired_1.length; _i++) {
            var key = VehicleRequired_1[_i];
            if (nullOrUndef(vehicle[key]))
                return false;
        }
        return true;
    };
})(HelperVehicle = exports.HelperVehicle || (exports.HelperVehicle = {}));
