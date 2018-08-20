const mocha = require('mocha');
const assert = require('assert');
const { HelperReport, HelperUser, HelperVehicle } = require('..');
const { badReports, goodReport } = require('./data/report');
const { badUsers, goodUser } = require('./data/user');
const { badVehicles, goodVehicle } = require('./data/vehicle');

describe('HelperReport', () => {
  describe('#valid()', () => {
    it('should return true when the report is valid', () => {
      assert.equal(HelperReport.valid(goodReport), true);
    });
    it('should return false when the report is invalid', () => {
      for (let badReport of badReports) {
        assert.equal(HelperReport.valid(badReport), false);
      }
    });
  });
});

describe('HelperUser', () => {
  describe('#valid()', () => {
    it('should return true when the user is valid', () => {
      assert.equal(HelperUser.valid(goodUser), true);
    });
    it('should return false when the user is invalid', () => {
      for (let badUser of badUsers) {
        assert.equal(HelperUser.valid(badUser), false);
      }
    });
  });
});

describe('HelperVehicle', () => {
  describe('#valid()', () => {
    it('should return true when the vehicle is valid', () => {
      assert.equal(HelperVehicle.valid(goodVehicle), true);
    });
    it('should return false when the vehicle is not valid', () => {
      for (let badVehicle in badVehicles) {
        assert.equal(HelperVehicle.valid(badVehicle), false);
      }
    });
  });
});

