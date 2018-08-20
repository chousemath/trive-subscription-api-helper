const mocha = require('mocha');
const assert = require('assert');
const { HelperUser, HelperVehicle } = require('..');
const { badUsers, goodUser } = require('./data/user');
const { badVehicles, goodVehicle } = require('./data/vehicle');

describe('HelperVehicle', () => {
  describe('#valid()', () => {
    it('should return true when the vehicle is valid', () => {
      assert.equal(HelperVehicle.valid(goodVehicle), true);
    });
    it('should return false when the vehicle is not valid', () => {
      for (let badVehicle in badVehicles) assert.equal(HelperVehicle.valid(badVehicle), false);
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
        console.log(badUser);
        assert.equal(HelperUser.valid(badUser), false);
      }
    })
  });
});

