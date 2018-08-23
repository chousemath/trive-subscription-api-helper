"use strict";
exports.__esModule = true;
var UserImageCategory;
(function (UserImageCategory) {
    UserImageCategory[UserImageCategory["LicenseFront"] = 1] = "LicenseFront";
    UserImageCategory[UserImageCategory["LicenseBack"] = 2] = "LicenseBack";
})(UserImageCategory = exports.UserImageCategory || (exports.UserImageCategory = {}));
exports.UserImageRequired = [
    'userId',
    'category',
    'url',
];
