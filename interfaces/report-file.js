"use strict";
exports.__esModule = true;
var ReportFileType;
(function (ReportFileType) {
    ReportFileType[ReportFileType["Image"] = 1] = "Image";
    ReportFileType[ReportFileType["Pdf"] = 2] = "Pdf";
    ReportFileType[ReportFileType["Text"] = 3] = "Text";
    ReportFileType[ReportFileType["Csv"] = 4] = "Csv";
})(ReportFileType = exports.ReportFileType || (exports.ReportFileType = {}));
exports.ReportFileRequired = [
    'fileType',
    'url',
    'reportId',
];
