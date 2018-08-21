const mocha = require('mocha');
const assert = require('assert');
const {
  HelperPayment,
  HelperProduct,
  HelperReport,
  HelperSubscription,
  HelperUser,
  HelperUserImage,
  HelperUserBillingKey,
  HelperUserSubscription,
  HelperVehicle
} = require('..');
const { badPayments, goodPayment } = require('./data/payment');
const { badProducts, goodProduct } = require('./data/product');
const { badReports, goodReport } = require('./data/report');
const { badSubscriptions, goodSubscription } = require('./data/subscription');
const { badUsers, goodUser } = require('./data/user');
const { badUserImages, goodUserImage } = require('./data/user-image');
const { badUserBillingKeys, goodUserBillingKey } = require('./data/user-billing-key');
const { badUserSubscriptions, goodUserSubscription } = require('./data/user-subscription');
const { badVehicles, goodVehicle } = require('./data/vehicle');

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

