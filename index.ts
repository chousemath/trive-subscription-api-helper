import { ModelVehicle, VehicleRequired } from './interfaces/vehicle';

const nullOrUndef = (value: number): boolean => value === null || value === undefined;

export namespace HelperVehicle {
  // checks whether or not a vehicle has all the attributes it needs to be a valid
  // database record
  export const valid = (vehicle: ModelVehicle): boolean => {
    let valid = true;
    for (let key of VehicleRequired) if (nullOrUndef(vehicle[key])) return false;
    return valid;
  };
};

