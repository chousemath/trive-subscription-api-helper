export enum ReportFileType {
  Image = 1,
  Pdf = 2,
  Text = 3,
  Csv = 4
}

export const ReportFileRequired: Array<string> = [
  'fileType',
  'url',
  'reportId',
];

export interface ReportFile {
  fileType: number, // please refer to ReportFileType above
  url: string,
  reportId: number
}