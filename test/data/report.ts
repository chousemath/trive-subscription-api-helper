import { Report } from "../../interfaces/report";

export const goodReport: Report = {
  userId: 1,
  vehicleId: 1,
  category: 1,
  title: 'a',
  description: 'b',
};

export const badReports: Array<Report> = [
  {
    userId: null,
    vehicleId: 1,
    category: 1,
    title: 'a',
    description: 'b',
  },
  {
    userId: 1,
    vehicleId: null,
    category: 1,
    title: 'a',
    description: 'b',
  },
  {
    userId: 1,
    vehicleId: 1,
    category: null,
    title: 'a',
    description: 'b',
  },
  {
    userId: 1,
    vehicleId: 1,
    category: 1,
    title: null,
    description: 'b',
  },
  {
    userId: 1,
    vehicleId: 1,
    category: 1,
    title: 'a',
    description: null,
  },
  {
    userId: undefined,
    vehicleId: 1,
    category: 1,
    title: 'a',
    description: 'b',
  },
  {
    userId: 1,
    vehicleId: undefined,
    category: 1,
    title: 'a',
    description: 'b',
  },
  {
    userId: 1,
    vehicleId: 1,
    category: undefined,
    title: 'a',
    description: 'b',
  },
  {
    userId: 1,
    vehicleId: 1,
    category: 1,
    title: undefined,
    description: 'b',
  },
  {
    userId: 1,
    vehicleId: 1,
    category: 1,
    title: 'a',
    description: undefined,
  },
];