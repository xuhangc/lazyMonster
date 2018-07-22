var QCSummary = require('../models/QCSummary');
var rawDataAggregation = require('../models/rawDataAggregation');
var retestInfoAggregation = require('../models/retestInfoAggregation');
var QCinDetail = require('../models/QCinDetail');
var fs = require('fs');
var mkdirp = require('mkdirp');
var multer = require('multer');
var path = require('path');
var rimraf = require('rimraf');

exports.qPCRqcSummaryDownload = function (req, res) {
    var savepath = path.join(__dirname + "../../../uploads/" + req.session.user._id);
    var file = savepath + '/201807211957qPCR_Sample_Result_Summary.xlsx';
    res.download(file);
    // res.redirect('/home');
    console.log("Download finish, Burrito")
}
