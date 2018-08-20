"use strict";
exports.__esModule = true;
exports.UserRequired = [
    'name',
    'phone',
    'email',
    'birthYear',
    'birthMonth',
    'birthDay',
    'status',
    'role',
];
var UserStatus;
(function (UserStatus) {
    UserStatus[UserStatus["Unconfirmed"] = 1] = "Unconfirmed";
    UserStatus[UserStatus["Confirmed"] = 2] = "Confirmed";
    UserStatus[UserStatus["Rejected"] = 3] = "Rejected";
    UserStatus[UserStatus["Deactivated"] = 4] = "Deactivated";
    UserStatus[UserStatus["Subscribed"] = 5] = "Subscribed";
    UserStatus[UserStatus["Suspended"] = 6] = "Suspended"; // user subscription eligibility has been suspended due to misconduct
})(UserStatus = exports.UserStatus || (exports.UserStatus = {}));
var Roles;
(function (Roles) {
    Roles[Roles["Admin"] = 1] = "Admin";
    Roles[Roles["Member"] = 2] = "Member";
})(Roles = exports.Roles || (exports.Roles = {}));
