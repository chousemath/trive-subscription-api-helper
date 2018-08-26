import { Vehicle, VehicleRequired } from './interfaces/vehicle';
import { User, UserRequired } from './interfaces/user';
import { ReportRequired, Report } from './interfaces/report';
import { TriveSubscription, SubscriptionRequired } from './interfaces/trive-subscription';
import { Product, ProductRequired } from './interfaces/product';
import { UserBillingKey, UserBillingKeyRequired } from './interfaces/user-billing-key';
import { UserImage, UserImageRequired } from './interfaces/user-image';
import { UserSubscription, UserSubscriptionRequired } from './interfaces/user-subscription';
import { Payment, PaymentRequired } from './interfaces/payment';
import { VehicleSubscription, VehicleSubscriptionRequired } from './interfaces/vehicle-subscription';
import { VehicleImage, VehicleImageRequired } from './interfaces/vehicle-image';
import { PaymentSubscription, PaymentSubscriptionRequired } from './interfaces/payment-subscription';
import { PaymentProduct, PaymentProductRequired } from './interfaces/payment-product';
import { PaymentUserBillingKey, PaymentUserBillingKeyRequired } from './interfaces/payment-user-billing-key';
import { ReportFile, ReportFileRequired } from './interfaces/report-file';

const notOk = (value: number): boolean => value !== 0 && !value;

export namespace HelperPayment {
  export const valid = (payment: Payment): boolean => {
    for (let key of PaymentRequired) if (notOk(payment[key])) return false;
    return true;
  };
}

export namespace HelperPaymentProduct {
  export const valid = (paymentProduct: PaymentProduct): boolean => {
    for (let key of PaymentProductRequired) if (notOk(paymentProduct[key])) return false;
    return true;
  };
}

export namespace HelperPaymentSubscription {
  export const valid = (paymentSubscription: PaymentSubscription): boolean => {
    for (let key of PaymentSubscriptionRequired) if (notOk(paymentSubscription[key])) return false;
    return true;
  };
}

export namespace HelperPaymentUserBillingKey {
  export const valid = (paymentUserBillingKey: PaymentUserBillingKey): boolean => {
    for (let key of PaymentUserBillingKeyRequired) if (notOk(paymentUserBillingKey[key])) return false;
    return true;
  };
}

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

export namespace HelperReportFile {
  export const valid = (reportFile: ReportFile): boolean => {
    for (let key of ReportFileRequired) if (notOk(reportFile[key])) return false;
    return true;
  };
}

export namespace HelperSubscription {
  export const extract = (subscription: TriveSubscription): TriveSubscription => {
    return {
      kmPackage: subscription.kmPackage,
      deliveryOption: subscription.deliveryOption,
      status: subscription.status,
      startDate: subscription.startDate,
      endDate: subscription.endDate,
    };
  };
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
    const img: string = userImage.url.toLowerCase();
    const isJpg: number = img.indexOf('.jpg');
    const isPng: number = img.indexOf('.png');
    const isJpeg: number = img.indexOf('.jpeg');
    return (isJpg + isPng + isJpeg) === -3 ? false : true;
  }
}

export namespace HelperUserSubscription {
  export const valid = (userSubscription: UserSubscription): boolean => {
    for (let key of UserSubscriptionRequired) if (notOk(userSubscription[key])) return false;
    return true;
  };
}

export namespace HelperUserBillingKey {
  export const valid = (userBillingKey: UserBillingKey): boolean => {
    for (let key of UserBillingKeyRequired) if (notOk(userBillingKey[key])) return false;
    return true;
  };
}

export namespace HelperVehicle {
  export const convertFeatures = (features: string): Array<number> => {
    return features ? features.split(',').map(x => parseInt(x, 10)) : [];
  };
  export const valid = (vehicle: Vehicle): boolean => {
    for (let key of VehicleRequired) if (notOk(vehicle[key])) return false;
    return true;
  };
}

export namespace HelperVehicleImage {
  export const valid = (vehicleImage: VehicleImage): boolean => {
    for (let key of VehicleImageRequired) if (notOk(vehicleImage[key])) return false;
    const img: string = vehicleImage.url.toLowerCase();
    const isJpg: number = img.indexOf('.jpg');
    const isPng: number = img.indexOf('.png');
    const isJpeg: number = img.indexOf('.jpeg');
    return (isJpg + isPng + isJpeg) === -3 ? false : true;
  }
}

export namespace HelperVehicleSubscription {
  export const valid = (vehicleSubscription: VehicleSubscription): boolean => {
    for (let key of VehicleSubscriptionRequired) if (notOk(vehicleSubscription[key])) return false;
    return true;
  };
}

