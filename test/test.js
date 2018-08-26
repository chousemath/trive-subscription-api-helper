const mocha = require('mocha');
const assert = require('assert');
const {
  HelperPayment,
  HelperPaymentProduct,
  HelperPaymentSubscription,
  HelperPaymentUserBillingKey,
  HelperProduct,
  HelperReport,
  HelperSubscription,
  HelperUser,
  HelperUserImage,
  HelperUserBillingKey,
  HelperUserSubscription,
  HelperVehicle,
  HelperVehicleImage,
  HelperVehicleSubscription,
} = require('..');
const { badPayments, goodPayment } = require('./data/payment');
const { badPaymentProducts, goodPaymentProduct } = require('./data/payment-product');
const { badPaymentSubscriptions, goodPaymentSubscription } = require('./data/payment-subscription');
const { badPaymentUserBillingKeys, goodPaymentUserBillingKey } = require('./data/payment-user-billing-key');
const { badProducts, goodProduct } = require('./data/product');
const { badReports, goodReport } = require('./data/report');
const { badSubscriptions, goodSubscription } = require('./data/subscription');
const { badUsers, goodUser } = require('./data/user');
const { badUserImages, goodUserImage } = require('./data/user-image');
const { badUserBillingKeys, goodUserBillingKey } = require('./data/user-billing-key');
const { badUserSubscriptions, goodUserSubscription } = require('./data/user-subscription');
const { badVehicles, goodVehicle } = require('./data/vehicle');
const { badVehicleImages, goodVehicleImage } = require('./data/vehicle-image');
const { badVehicleSubscriptions, goodVehicleSubscription } = require('./data/vehicle-subscription');

mocha.describe('HelperPayment', () => {
  mocha.describe('#valid()', () => {
    mocha.it('should return true when the payment is valid', () => {
      assert.equal(HelperPayment.valid(goodPayment), true);
    });
    mocha.it('should return false when the payment is invalid', () => {
      for (let badPayment of badPayments) {
        assert.equal(HelperPayment.valid(badPayment), false);
      }
    });
  });
});

mocha.describe('HelperPaymentProduct', () => {
  mocha.describe('#valid()', () => {
    mocha.it('should return true when the payment product is valid', () => {
      assert.equal(HelperPaymentProduct.valid(goodPaymentProduct), true);
    });
    mocha.it('should return false when the payment product is invalid', () => {
      for (let badPaymentProduct of badPaymentProducts) {
        assert.equal(HelperPaymentProduct.valid(badPaymentProduct), false);
      }
    });
  });
});

mocha.describe('HelperPaymentSubscription', () => {
  mocha.describe('#valid()', () => {
    mocha.it('should return true when the payment subscription is valid', () => {
      assert.equal(HelperPaymentSubscription.valid(goodPaymentSubscription), true);
    });
    mocha.it('should return false when the user subscription is invalid', () => {
      for (let badPaymentSubscription of badPaymentSubscriptions) {
        assert.equal(HelperPaymentSubscription.valid(badPaymentSubscription), false);
      }
    });
  });
});

mocha.describe('HelperPaymentUserBillingKey', () => {
  mocha.describe('#valid()', () => {
    mocha.it('should return true when the payment user billing key is valid', () => {
      assert.equal(HelperPaymentUserBillingKey.valid(goodPaymentUserBillingKey), true);
    });
    mocha.it('should return false when the payment user billing key is invalid', () => {
      for (let badPaymentUserBillingKey of badPaymentUserBillingKeys) {
        assert.equal(HelperPaymentUserBillingKey.valid(badPaymentUserBillingKey), false);
      }
    });
  });
});

mocha.describe('HelperProduct', () => {
  mocha.describe('#valid()', () => {
    mocha.it('should return true when the product is valid', () => {
      assert.equal(HelperProduct.valid(goodProduct), true);
    });
    mocha.it('should return false when the product is invalid', () => {
      for (let badProduct of badProducts) {
        assert.equal(HelperProduct.valid(badProduct), false);
      }
    });
  });
});

mocha.describe('HelperReport', () => {
  mocha.describe('#valid()', () => {
    mocha.it('should return true when the report is valid', () => {
      assert.equal(HelperReport.valid(goodReport), true);
    });
    mocha.it('should return false when the report is invalid', () => {
      for (let badReport of badReports) {
        assert.equal(HelperReport.valid(badReport), false);
      }
    });
  });
});

mocha.describe('HelperSubscription', () => {
  mocha.describe('#valid()', () => {
    mocha.it('should return true when the subscription is valid', () => {
      assert.equal(HelperSubscription.valid(goodSubscription), true);
    });
    mocha.it('should return false for invalid subscriptions', () => {
      for (let badSubscription of badSubscriptions) {
        assert.equal(HelperSubscription.valid(badSubscription), false);
      }
    });
    mocha.it('should extract out only the essential values from a subscription-like object', () => {
      const extracted = HelperSubscription.extract(goodSubscription);
      for (let key of Object.keys(goodSubscription)) {
        if (key === 'id') continue;
        assert.equal(goodSubscription[key], extracted[key]);
      }
    });
  });
});

mocha.describe('HelperUser', () => {
  mocha.describe('#valid()', () => {
    mocha.it('should return true when the user is valid', () => {
      assert.equal(HelperUser.valid(goodUser), true);
    });
    mocha.it('should return false when the user is invalid', () => {
      for (let badUser of badUsers) {
        assert.equal(HelperUser.valid(badUser), false);
      }
    });
  });
});

mocha.describe('HelperUserImage', () => {
  mocha.describe('#valid()', () => {
    mocha.it('should return true when the user image is valid', () => {
      assert.equal(HelperUserImage.valid(goodUserImage), true);
    });
    mocha.it('should return false when the user image is invalid', () => {
      for (let badUserImage of badUserImages) {
        assert.equal(HelperUserImage.valid(badUserImage), false);
      }
    });
  });
});

mocha.describe('HelperUserBillingKey', () => {
  mocha.describe('#valid()', () => {
    mocha.it('should return true when the user billing key is valid', () => {
      assert.equal(HelperUserBillingKey.valid(goodUserBillingKey), true);
    });
    mocha.it('should return false when the user billing key is invalid', () => {
      for (let badUserBillingKey of badUserBillingKeys) {
        assert.equal(HelperUserBillingKey.valid(badUserBillingKey), false);
      }
    });
  });
});

mocha.describe('HelperUserSubscription', () => {
  mocha.describe('#valid()', () => {
    mocha.it('should return true when the user subscription is valid', () => {
      assert.equal(HelperUserSubscription.valid(goodUserSubscription), true);
    });
    mocha.it('should return false when the user subscription is invalid', () => {
      for (let badUserSubscription of badUserSubscriptions) {
        assert.equal(HelperUserSubscription.valid(badUserSubscription), false);
      }
    });
  });
});

mocha.describe('HelperVehicle', () => {
  mocha.describe('#convertFeatures()', () => {
    mocha.it('should return an array of numbers if there is a string input', () => {
      const results = HelperVehicle.convertFeatures('1,2,3');
      assert.equal(results[0], 1);
      assert.equal(results[1], 2);
      assert.equal(results[2], 3);
    });
    mocha.it('should return an empty array if the input is falsey', () => {
      const results = HelperVehicle.convertFeatures(null);
      assert.equal(results.length, 0);
    });
  });
  mocha.describe('#valid()', () => {
    mocha.it('should return true when the vehicle is valid', () => {
      assert.equal(HelperVehicle.valid(goodVehicle), true);
    });
    mocha.it('should return false when the vehicle is not valid', () => {
      for (let badVehicle in badVehicles) {
        assert.equal(HelperVehicle.valid(badVehicle), false);
      }
    });
  });
});

mocha.describe('HelperVehicleImage', () => {
  mocha.describe('#valid()', () => {
    mocha.it('should return true when the vehicle image is valid', () => {
      assert.equal(HelperVehicleImage.valid(goodVehicleImage), true);
    });
    mocha.it('should return false when the vehicle image is invalid', () => {
      for (let badVehicleImage of badVehicleImages) {
        assert.equal(HelperVehicleImage.valid(badVehicleImage), false);
      }
    });
  });
});

mocha.describe('HelperVehicleSubscription', () => {
  mocha.describe('#valid()', () => {
    mocha.it('should return true when the vehicle subscription is valid', () => {
      assert.equal(HelperVehicleSubscription.valid(goodVehicleSubscription), true);
    });
    mocha.it('should return false when the vehicle subscription is invalid', () => {
      for (let badVehicleSubscription of badVehicleSubscriptions) {
        assert.equal(HelperVehicleSubscription.valid(badVehicleSubscription), false);
      }
    });
  });
});

