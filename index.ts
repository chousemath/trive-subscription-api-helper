import { Vehicle, VehicleRequired } from './interfaces/vehicle';
import { User, UserRequired } from './interfaces/user';
import { ReportRequired, Report } from './interfaces/report';

const nullOrUndef = (value: number): boolean => value === null || value === undefined;

export namespace HelperReport {
  // checks whether or not a report has all the attributes it needs to be a valid
  // database record
  export const valid = (report: Report): boolean => {
    for (let key of ReportRequired) if (nullOrUndef(report[key])) return false;
    return true;
  };
}

export namespace HelperUser {
  // checks whether or not a user has all the attributes it needs to be a valid
  // database record
  export const valid = (user: User): boolean => {
    for (let key of UserRequired) if (nullOrUndef(user[key])) return false;
    return true;
  };
}

export namespace HelperVehicle {
  // checks whether or not a vehicle has all the attributes it needs to be a valid
  // database record
  export const valid = (vehicle: Vehicle): boolean => {
    for (let key of VehicleRequired) if (nullOrUndef(vehicle[key])) return false;
    return true;
  };
}

