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

    // fs.readdir(savepath, (err, files) => {
    //     files.forEach(file => {
    //         if (file.indexOf("qPCR_QC_Summary") != -1) {
    //             file = '/' + file;
    //             res.download(savepath, file, function (err) {
    //                 console.log(file);
    //             });
    //         }
    //     });
    // })



    var file = savepath + '/201807222111qPCR_QC_Summary.xlsx';
    // var file = ['/201807222007qPCR_QC_Summary.xlsx', '/201807221745qPCR_QC_Summary.xlsx'];
    res.download(file);
    // res.redirect('/home');

    // res.download(savepath, file, function (err) {
    //     console.log('Burrito');
    // })
    console.log('Burrito');
}
