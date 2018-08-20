import { Vehicle, VehicleRequired } from './interfaces/vehicle';
import { User, UserRequired } from './interfaces/user';
import { ReportRequired, Report } from './interfaces/report';
import { TriveSubscription, SubscriptionRequired } from './interfaces/trive-subscription';

const notOk = (value: number): boolean => value !== 0 && !value;

export namespace HelperReport {
  export const valid = (report: Report): boolean => {
    for (let key of ReportRequired) if (notOk(report[key])) return false;
    return true;
  };
}

export namespace HelperSubscription {
  export const valid = (subscription: TriveSubscription): boolean => {
    for (let key of SubscriptionRequired) if (notOk(subscription[key])) return false;
    if (subscription.startDate >= subscription.endDate) return false;
    return true;
  };
}

export namespace HelperUser {
  export const valid = (user: User): boolean => {
    for (let key of UserRequired) if (notOk(user[key])) return false;
    return true;
  };
}

export namespace HelperVehicle {
  export const valid = (vehicle: Vehicle): boolean => {
    for (let key of VehicleRequired) if (notOk(vehicle[key])) return false;
    return true;
  };
}

