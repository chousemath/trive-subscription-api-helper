const mocha = require('mocha');
const assert = require('assert');
const { HelperReport, HelperSubscription, HelperUser, HelperVehicle } = require('..');
const { badReports, goodReport } = require('./data/report');
const { badSubscriptions, goodSubscription } = require('./data/subscription');
const { badUsers, goodUser } = require('./data/user');
const { badVehicles, goodVehicle } = require('./data/vehicle');

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

