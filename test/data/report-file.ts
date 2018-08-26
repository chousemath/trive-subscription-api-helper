import { ReportFile } from "../../interfaces/report-file";

export const goodReportFile: ReportFile = {
  reportId: 1,
  fileType: 1,
  url: '1234.jpg',
};

export const badReportFiles: Array<ReportFile> = [
  {
    reportId: null,
    fileType: 1,
    url: '1234.jpg',
  },
  {
    reportId: undefined,
    fileType: 1,
    url: '1234.jpg',
  },
  {
    reportId: NaN,
    fileType: 1,
    url: '1234.jpg',
  },
  {
    reportId: 1,
    fileType: null,
    url: '1234.jpg',
  },
  {
    reportId: 1,
    fileType: undefined,
    url: '1234.jpg',
  },
  {
    reportId: 1,
    fileType: NaN,
    url: '1234.jpg',
  },
  {
    reportId: 1,
    fileType: 1,
    url: null,
  },
  {
    reportId: 1,
    fileType: 1,
    url: undefined,
  },
];