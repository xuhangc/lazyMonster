var QCSummary = require('../models/qPCRQCSummary');
var rawDataAggregation = require('../models/qPCRrawDataAggregation');
var retestInfoAggregation = require('../models/qPCRretestInfoAggregation');
var QCinDetail = require('../models/qPCRQCinDetail');
var fs = require('fs');
var mkdirp = require('mkdirp');
var multer = require('multer');
var path = require('path');
var rimraf = require('rimraf');
require('events').EventEmitter.prototype._maxListeners = 100;

exports.qPCRqcSummaryDownload = function (req, res) {
    var savepath = path.join(__dirname + "../../../downloads/" + req.session.user._id);

    fs.readdir(savepath, (err, files) => {
        files.forEach(file => {
            if (file.indexOf("qPCR_QC_Summary") != -1) {
                var filePath = path.join(savepath + '/' + file);
                var fileStream = fs.createWriteStream(filePath);
                res.pipe(fileStream);
            }
        });
    })
    // res.redirect('/home');
    console.log("Download finish, Burrito");
}
