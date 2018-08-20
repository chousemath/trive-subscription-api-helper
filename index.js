"use strict";
exports.__esModule = true;
var vehicle_1 = require("./interfaces/vehicle");
var nullOrUndef = function (value) { return value === null || value === undefined; };
var Vehicle;
(function (Vehicle) {
    Vehicle.valid = function (vehicle) {
        var valid = true;
        for (var _i = 0, VehicleRequired_1 = vehicle_1.VehicleRequired; _i < VehicleRequired_1.length; _i++) {
            var key = VehicleRequired_1[_i];
            if (nullOrUndef(vehicle[key]))
                return false;
        }
        return valid;
    };
})(Vehicle = exports.Vehicle || (exports.Vehicle = {}));
;
