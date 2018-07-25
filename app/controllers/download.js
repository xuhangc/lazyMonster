var qPCRQCSummary = require('../models/qPCRQCSummary');
var qPCRrawDataAggregation = require('../models/qPCRrawDataAggregation');
var qPCRretestInfoAggregation = require('../models/qPCRretestInfoAggregation');
var qPCRQCinDetail = require('../models/qPCRQCinDetail');
var fs = require('fs');
var mkdirp = require('mkdirp');
var multer = require('multer');
var path = require('path');
var rimraf = require('rimraf');
var mongoXlsx = require('mongo-xlsx');
var mongoose = require('mongoose');

exports.qPCRqcSummaryDownload = function (req, res) {
    qPCRQCSummary.find({UserId: req.user._id}, {
        _id: 0,
        UserId: 0,
        __v: 0,
        createdAt: 0,
        updatedAt: 0
    }, function (err, data) {
        var model = mongoXlsx.buildDynamicModel(data);
        mongoXlsx.mongoData2Xlsx(data, model, function (err, data) {
            res.download(data.fullPath, "qPCR_QC_Summary.xlsx", function (err) {
                fs.unlink(data.fullPath, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        qPCRQCSummary.remove({}, function (err) {
                            console.log('collection removed');
                        });
                    }
                });
            });
        });
    });
}

exports.qPCRretestInfoAggregationDownload = function (req, res) {
    qPCRretestInfoAggregation.find({UserId: req.session.user._id}, {
        _id: 0,
        UserId: 0,
        __v: 0,
        createdAt: 0,
        updatedAt: 0
    }, function (err, data) {
        var model = mongoXlsx.buildDynamicModel(data);
        mongoXlsx.mongoData2Xlsx(data, model, function (err, data) {
            res.download(data.fullPath, "qPCR_Retest_Summary.xlsx", function (err) {
                fs.unlink(data.fullPath, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        qPCRretestInfoAggregation.remove({}, function (err) {
                            console.log('collection removed');
                        });
                    }
                });
            });
        });
    });
}

exports.qPCRrawDataAggregationDownload = function (req, res) {
    qPCRrawDataAggregation.find({UserId: req.user._id}, {
        _id: 0,
        UserId: 0,
        __v: 0,
        createdAt: 0,
        updatedAt: 0
    }, function (err, data) {
        var model = mongoXlsx.buildDynamicModel(data);
        mongoXlsx.mongoData2Xlsx(data, model, function (err, data) {
            res.download(data.fullPath, "qPCR_Sample_Result_Summary.xlsx", function (err) {
                fs.unlink(data.fullPath, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        qPCRrawDataAggregation.remove({}, function (err) {
                            console.log('collection removed');
                        });
                    }
                });
            });
        });
    });
}

exports.qPCRQCinDetailDownload = function (req, res) {
    qPCRQCinDetail.find({UserId: req.user._id}, {
        _id: 0,
        UserId: 0,
        __v: 0,
        createdAt: 0,
        updatedAt: 0
    }, function (err, data) {
        var model = mongoXlsx.buildDynamicModel(data);
        mongoXlsx.mongoData2Xlsx(data, model, function (err, data) {
            res.download(data.fullPath, "qPCR_QC_Detail_Summary.xlsx", function (err) {
                fs.unlink(data.fullPath, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        qPCRQCinDetail.remove({}, function (err) {
                            console.log('collection removed');
                        });
                    }
                });
            });
        });
    });
}


