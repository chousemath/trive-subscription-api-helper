"use strict";
exports.__esModule = true;
var vehicle_1 = require("./interfaces/vehicle");
var user_1 = require("./interfaces/user");
var report_1 = require("./interfaces/report");
var trive_subscription_1 = require("./interfaces/trive-subscription");
var notOk = function (value) { return value !== 0 && !value; };
var HelperReport;
(function (HelperReport) {
    HelperReport.valid = function (report) {
        for (var _i = 0, ReportRequired_1 = report_1.ReportRequired; _i < ReportRequired_1.length; _i++) {
            var key = ReportRequired_1[_i];
            if (notOk(report[key]))
                return false;
        }
        return true;
    };
})(HelperReport = exports.HelperReport || (exports.HelperReport = {}));
var HelperSubscription;
(function (HelperSubscription) {
    HelperSubscription.valid = function (subscription) {
        for (var _i = 0, SubscriptionRequired_1 = trive_subscription_1.SubscriptionRequired; _i < SubscriptionRequired_1.length; _i++) {
            var key = SubscriptionRequired_1[_i];
            if (notOk(subscription[key]))
                return false;
        }
        if (subscription.startDate >= subscription.endDate)
            return false;
        return true;
    };
})(HelperSubscription = exports.HelperSubscription || (exports.HelperSubscription = {}));
var HelperUser;
(function (HelperUser) {
    HelperUser.valid = function (user) {
        for (var _i = 0, UserRequired_1 = user_1.UserRequired; _i < UserRequired_1.length; _i++) {
            var key = UserRequired_1[_i];
            if (notOk(user[key]))
                return false;
        }
        return true;
    };
})(HelperUser = exports.HelperUser || (exports.HelperUser = {}));
var HelperVehicle;
(function (HelperVehicle) {
    HelperVehicle.valid = function (vehicle) {
        for (var _i = 0, VehicleRequired_1 = vehicle_1.VehicleRequired; _i < VehicleRequired_1.length; _i++) {
            var key = VehicleRequired_1[_i];
            if (notOk(vehicle[key]))
                return false;
        }
        return true;
    };
})(HelperVehicle = exports.HelperVehicle || (exports.HelperVehicle = {}));
