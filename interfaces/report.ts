export enum ReportCategory {
  Accident = 1,
  Maintenance = 2,
  Cleaning = 3,
  Theft = 4,
}

export const ReportRequired: Array<string> = [
  'userId',
  'vehicleId',
  'category',
  'title',
  'description',
];

export interface Report {
  id?: number;
  userId: number;
  vehicleId: number;
  category: number;
  title: string;
  description: string;
  createdAt?: number;
  updatedAt?: number;
}
