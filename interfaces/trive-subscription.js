"use strict";
exports.__esModule = true;
var SubscriptionStatus;
(function (SubscriptionStatus) {
    SubscriptionStatus[SubscriptionStatus["Requested"] = 1] = "Requested";
    SubscriptionStatus[SubscriptionStatus["Approved"] = 2] = "Approved";
    SubscriptionStatus[SubscriptionStatus["Rejected"] = 3] = "Rejected";
    SubscriptionStatus[SubscriptionStatus["Active"] = 4] = "Active";
    SubscriptionStatus[SubscriptionStatus["Completed"] = 5] = "Completed";
    SubscriptionStatus[SubscriptionStatus["Cancelled"] = 6] = "Cancelled";
    SubscriptionStatus[SubscriptionStatus["Suspended"] = 7] = "Suspended"; // the subscription has been suspended by an admin for some violation of policy
})(SubscriptionStatus = exports.SubscriptionStatus || (exports.SubscriptionStatus = {}));
// km packages in km/Month
var KmPackage;
(function (KmPackage) {
    KmPackage[KmPackage["Month1300"] = 1] = "Month1300";
    KmPackage[KmPackage["Month2000"] = 2] = "Month2000";
    KmPackage[KmPackage["Month2600"] = 3] = "Month2600";
    KmPackage[KmPackage["Month3300"] = 4] = "Month3300";
})(KmPackage = exports.KmPackage || (exports.KmPackage = {}));
var DeliveryOption;
(function (DeliveryOption) {
    DeliveryOption[DeliveryOption["Pickup"] = 1] = "Pickup";
    DeliveryOption[DeliveryOption["Delivery"] = 2] = "Delivery";
})(DeliveryOption = exports.DeliveryOption || (exports.DeliveryOption = {}));
exports.SubscriptionRequired = [
    'kmPackage',
    'deliveryOption',
    'status',
    'startDate',
    'endDate',
];
