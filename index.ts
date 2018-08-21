import { Vehicle, VehicleRequired } from './interfaces/vehicle';
import { User, UserRequired } from './interfaces/user';
import { ReportRequired, Report } from './interfaces/report';
import { TriveSubscription, SubscriptionRequired } from './interfaces/trive-subscription';
import { Product, ProductRequired } from './interfaces/product';
import { UserBillingKey, UserBillingKeyRequired } from './interfaces/user-billing-key';
import { UserImage, UserImageRequired } from './interfaces/user-image';

const notOk = (value: number): boolean => value !== 0 && !value;

export namespace HelperProduct {
  export const valid = (product: Product): boolean => {
    for (let key of ProductRequired) if (notOk(product[key])) return false;
    return true;
  };
}

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

export namespace HelperUserImage {
  export const valid = (userImage: UserImage): boolean => {
    for (let key of UserImageRequired) if (notOk(userImage[key])) return false;
    const img: string = userImage.license_image.toLowerCase();
    const isJpg: number = img.indexOf('.jpg');
    const isPng: number = img.indexOf('.png');
    const isJpeg: number = img.indexOf('.jpeg');
    return (isJpg + isPng + isJpeg) === -3 ? false : true;
  }
}

export namespace HelperUserBillingKey {
  export const valid = (userBillingKey: UserBillingKey): boolean => {
    for (let key of UserBillingKeyRequired) if (notOk(userBillingKey[key])) return false;
    return true;
  };
}

export namespace HelperVehicle {
  export const valid = (vehicle: Vehicle): boolean => {
    for (let key of VehicleRequired) if (notOk(vehicle[key])) return false;
    return true;
  };
}

