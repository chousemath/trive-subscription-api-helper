"use strict";
exports.__esModule = true;
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod[PaymentMethod["CreditCard"] = 1] = "CreditCard";
    PaymentMethod[PaymentMethod["Vbank"] = 2] = "Vbank";
    PaymentMethod[PaymentMethod["Phone"] = 3] = "Phone";
})(PaymentMethod = exports.PaymentMethod || (exports.PaymentMethod = {}));
var PaymentCategory;
(function (PaymentCategory) {
    PaymentCategory[PaymentCategory["SubscriptionFee"] = 1] = "SubscriptionFee";
    PaymentCategory[PaymentCategory["MaintenanceFee"] = 2] = "MaintenanceFee";
    PaymentCategory[PaymentCategory["DistanceLimitFee"] = 3] = "DistanceLimitFee";
})(PaymentCategory = exports.PaymentCategory || (exports.PaymentCategory = {}));
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Cancelled"] = 1] = "Cancelled";
    PaymentStatus[PaymentStatus["Pending"] = 2] = "Pending";
    PaymentStatus[PaymentStatus["Complete"] = 3] = "Complete";
    PaymentStatus[PaymentStatus["CancellationRequested"] = 4] = "CancellationRequested";
    PaymentStatus[PaymentStatus["CancellationRejected"] = 5] = "CancellationRejected";
})(PaymentStatus = exports.PaymentStatus || (exports.PaymentStatus = {}));
exports.PaymentRequired = [
    'merchantId',
    'amount',
    'paymentMethod',
    'category',
    'status',
    'description',
    'billingKey',
];
