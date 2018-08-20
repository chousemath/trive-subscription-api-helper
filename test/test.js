const mocha = require('mocha');
const assert = require('assert');
const { HelperVehicle } = require('..');
const { badVehicles, goodVehicle } = require('./data/vehicle');

describe('Vehicle', () => {
  describe('#valid()', () => {
    it('should return true when the vehicle is valid', function () {
      assert.equal(HelperVehicle.valid(goodVehicle), true);
    });
    it('should return false when the vehicle is not valid', () => {
      for (let badVehicle in badVehicles) assert.equal(HelperVehicle.valid(badVehicle), false);
    });
  });
});

