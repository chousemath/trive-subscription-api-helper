export const VehicleImageRequired: Array<string> = [
  'vehicleId',
  'order',
  'url',
];

export interface VehicleImage {
  vehicleId: number; // primary key of the vehicle with which this image is associated
  order: number;
  url: string; // url of the image
}
