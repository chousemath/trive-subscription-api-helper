"use strict";
exports.__esModule = true;
var ProductCategory;
(function (ProductCategory) {
    ProductCategory[ProductCategory["Cleaning"] = 1] = "Cleaning";
    ProductCategory[ProductCategory["Maintenance"] = 2] = "Maintenance";
    ProductCategory[ProductCategory["RoadsideAssistance"] = 3] = "RoadsideAssistance";
    ProductCategory[ProductCategory["Accessory"] = 4] = "Accessory";
})(ProductCategory = exports.ProductCategory || (exports.ProductCategory = {}));
var ProductStatus;
(function (ProductStatus) {
    ProductStatus[ProductStatus["Inactive"] = 1] = "Inactive";
    ProductStatus[ProductStatus["Active"] = 2] = "Active";
    ProductStatus[ProductStatus["Expired"] = 3] = "Expired";
})(ProductStatus = exports.ProductStatus || (exports.ProductStatus = {}));
exports.ProductRequired = [
    'category',
    'status',
    'amount',
    'title',
    'description',
];
