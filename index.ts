import { Vehicle, VehicleRequired } from './interfaces/vehicle';
import { User, UserRequired } from './interfaces/user';
import { ReportRequired, Report } from './interfaces/report';

const notOk = (value: number): boolean => value !== 0 && !value;

export namespace HelperReport {
  // checks whether or not a report has all the attributes it needs to be a valid
  // database record
  export const valid = (report: Report): boolean => {
    for (let key of ReportRequired) if (notOk(report[key])) return false;
    return true;
  };
}

export namespace HelperUser {
  // checks whether or not a user has all the attributes it needs to be a valid
  // database record
  export const valid = (user: User): boolean => {
    for (let key of UserRequired) if (notOk(user[key])) return false;
    return true;
  };
}

export namespace HelperVehicle {
  // checks whether or not a vehicle has all the attributes it needs to be a valid
  // database record
  export const valid = (vehicle: Vehicle): boolean => {
    for (let key of VehicleRequired) if (notOk(vehicle[key])) return false;
    return true;
  };
}

