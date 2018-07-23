var QCSummary = require('../models/qPCRQCSummary');
var rawDataAggregation = require('../models/qPCRrawDataAggregation');
var retestInfoAggregation = require('../models/qPCRretestInfoAggregation');
var QCinDetail = require('../models/qPCRQCinDetail');
var fs = require('fs');
var mkdirp = require('mkdirp');
var multer = require('multer');
var path = require('path');
var rimraf = require('rimraf');
var mongoXlsx = require('mongo-xlsx');

exports.qPCRqcSummaryDownload = function (req, res) {
    QCSummary.find({UserId:req.user._id}, { _id: 0, UserId: 0, __v: 0 }, function(err, data) {
      var model = mongoXlsx.buildDynamicModel(data);
      mongoXlsx.mongoData2Xlsx(data, model, function(err, data) {
        res.download(data.fullPath, "new name.xlsx", function(err) {
          fs.unlink(data.fullPath, function(err) {
            if (err) console.log(err);
            else return;
          });
        });
      });
    });
}
