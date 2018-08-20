export const VehicleRequired: Array<string> = [
  'bodyType',
  'carType',
  'colorExterior',
  'cylinder',
  'door',
  'drivetrain',
  'fuel',
  'fuelEconomy',
  'make',
  'model',
  'trim',
  'transmission',
  'year',
];

export interface ModelVehicle {
  id?: number; // integer primary key of this vehicle, x
  bodyType: number; // numeric code for the body type of this vehicle, x
  carType: number; // numeric code for the car type of this vehicle (family, luxury, etc.), x
  colorExterior: number; // numeric code for the exterior color of this vehicle, x
  colorInterior: number; // numeric code for the interior color of this vehicle, x
  cylinder: number; // numeric code for the cylinder type of this vehicle, x
  door: number; // numeric code for the door count type of this vehicle, x
  drivetrain: number; // numeric code for the drivetrain of this vehicle, x
  // The reason why features can be either an array of numbers or a string is because
  // the server expects features to be a string, wherease on the client we use features as
  // an array of enums
  features: Array<number> | string; // array of numeric codes of features this vehicle possesses
  fuel: number; // numeric code for the fuel this vehicle uses, x
  fuelEconomy: number; // how far this car can go (in km) per L of fuel, x
  latitude: number; // latitude of where this vehicle is located, used in filter based on user's location, x
  longitude: number; // longitude of where this vehicle is located, used in filter based on user's location, x
  make: number; // numeric code for the manufacturer of this vehicle, e.g. 0 => Audi, 1 => BMW, 2 => Chevrolet, x
  model: string; // model of this vehicle, e.g. Sonata, Accent, Azera, x
  trim: string; // trim of this vehicle, e.g. ECO, GL, GLS, LX, x
  subscriptionStart: number; // unix timestamp (in s) of when this subscription will be available, used in filter
  subscriptionType: number; // the particular subscription plan this car is available for
  transmission: number; // numeric code for this vehicle's gearbox/transmission system, x
  year: number; // the year of this particular car model
}