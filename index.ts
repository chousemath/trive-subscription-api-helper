import { ModelVehicle, VehicleRequired } from './interfaces/vehicle';

const nullOrUndef = (value: number): boolean => value === null || value === undefined;

export namespace Vehicle {
  export const valid = (vehicle: ModelVehicle): boolean => {
    let valid = true;
    for (let key of VehicleRequired) if (nullOrUndef(vehicle[key])) return false;
    return valid;
  };
};

