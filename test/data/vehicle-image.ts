import { VehicleImage } from "../../interfaces/vehicle-image";

export const goodVehicleImage: VehicleImage = {
  vehicleId: 1,
  order: 1,
  url: '1234.jpg',
};

export const badVehicleImages: Array<VehicleImage> = [
  {
    vehicleId: null,
    order: 1,
    url: '1234.jpg',
  },
  {
    vehicleId: undefined,
    order: 1,
    url: '1234.jpg',
  },
  {
    vehicleId: NaN,
    order: 1,
    url: '1234.jpg',
  },
  {
    vehicleId: 1,
    order: null,
    url: '1234.jpg',
  },
  {
    vehicleId: 1,
    order: undefined,
    url: '1234.jpg',
  },
  {
    vehicleId: 1,
    order: NaN,
    url: '1234.jpg',
  },
  {
    vehicleId: 1,
    order: 1,
    url: null,
  },
  {
    vehicleId: 1,
    order: 1,
    url: undefined,
  },
  {
    vehicleId: 1,
    order: 1,
    url: '1234.pdf',
  },
];