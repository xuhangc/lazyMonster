var numeral = require('numeral');
var dateFormat = require('dateformat');
var PythonShell = require('python-shell');
var fs = require('fs');
var mkdirp = require('mkdirp');
var multer = require('multer');
var path = require('path');
var mongoose = require('mongoose');
var rimraf = require('rimraf');
var async = require('async');

var qPCRQCSummary = require('../models/qPCRQCSummary');
var qPCRrawDataAggregation = require('../models/qPCRrawDataAggregation');
var qPCRretestInfoAggregation = require('../models/qPCRretestInfoAggregation');
var qPCRQCinDetail = require('../models/qPCRQCinDetail');

var wesLinearRegression = require('../models/wesLinearRegression');
var wesStandardCurve = require('../models/wesStandardCurve');
var wesUpperandLowerBond = require('../models/wesUpperandLowerBond');
var wesQCData = require('../models/wesQCData');
var wesSampleAnalysis = require('../models/wesSampleAnalysis');

var nabData = require('../models/nabData');

Date.prototype.yyyymmddhhmm = function () {
    var yyyy = this.getFullYear();
    var mm = this.getMonth() < 9 ? "0" + (this.getMonth() + 1) : (this.getMonth() + 1); // getMonth() is zero-based
    var dd = this.getDate() < 10 ? "0" + this.getDate() : this.getDate();
    var hh = this.getHours() < 10 ? "0" + this.getHours() : this.getHours();
    var min = this.getMinutes() < 10 ? "0" + this.getMinutes() : this.getMinutes();
    return "".concat(yyyy).concat(mm).concat(dd).concat(hh).concat(min);
};

exports.loggedIn = function (req, res, next) {
    if (req.session.user) { // req.session.passport._id
        next();
    } else {
        res.redirect('/signup');
    }
}

exports.home = function (req, res) {
    res.render('home.ejs', {
        error: req.flash("error"),
        success: req.flash("success"),
        session: req.session,
    });
}

exports.signup = function (req, res) {
    if (req.session.user) {
        res.redirect('/home');
    } else {
        res.render('signup', {
            error: req.flash("error"),
            success: req.flash("success"),
            session: req.session
        });
    }
}

exports.login = function (req, res) {
    if (req.session.user) {
        res.redirect('/home');
    } else {
        res.render('login', {
            error: req.flash("error"),
            success: req.flash("success"),
            session: req.session
        });
    }
}

exports.upload = function (req, res) {
    var dir_name = Date.now();
    console.log(req.session.user._id);
    console.log(req.user._id);
    console.log(req.params.operation);
    mkdirp('uploads/' + dir_name, function (err) {
        var storage = multer.diskStorage({
            destination: 'uploads/' + dir_name,
            filename: function (req, file, cb) {
                cb(null, file.originalname);
            }
        });
        var upload = multer({
            storage: storage,
            fileFilter: function (req, file, callback) {
                var ext = path.extname(file.originalname);
                if (ext !== '.xlsx') {
                    return callback(null, false);
                }
                callback(null, true)
            }
        }).any();
        upload(req, res, function (err) {
            if (err) {
                return res.end("Error uploading file.");
            }
            else {
                // var files = req.files;
                // for (var i = 0; i < files.length; i++) {
                //   console.log('type %s', files[i].mimetype);
                //   console.log('original name：%s', files[i].originalname);
                //   console.log('size：%s', files[i].size);
                //   console.log('save path：%s', files[i].path);
                // }
                var filepath = path.join(__dirname + "../../../uploads/" + dir_name);
                var savepath = path.join(__dirname + "../../../downloads/" + req.session.user._id);
                var d = new Date();
                var filename = d.yyyymmddhhmm();
                mkdirp('downloads/' + req.session.user._id, function (err) {
                    var options = {
                        mode: 'json',
                        pythonOptions: ['-u'], // get print results in real-time
                        scriptPath: path.join(__dirname + "../../../python"),
                        args: [filepath, req.params.operation]
                    };
                    var shell = new PythonShell('qPCR_aggregation_v2.py', options);
                    async.parallel({
                        one: function (callback) {
                            shell.on('message', function (message) {
                                    if (req.params.operation == 'qPCRqc') {
                                        for (var i = 0; i < message.length; i++) {
                                            var elem = new qPCRQCSummary({
                                                UserId: req.session.user._id,
                                                PCRRunNumber: message[i].PCRRunNumber,
                                                ExtractionDate: message[i].ExtractionDate,
                                                SampleName: message[i].SampleName,
                                                WellPosition: message[i].WellPosition,
                                                CtMean: message[i].CtMean,
                                                CtSD: message[i].CtSD,
                                                QuantityMeanPer10uL: message[i].QuantityMeanPer10uL,
                                                QuantitySDPer10uL: message[i].QuantitySDPer10uL,
                                                QuantityCVPer10uL: message[i].QuantityCVPer10uL,
                                                QuantityNominalPer10uL: message[i].QuantityNominalPer10uL,
                                                PercentRE: message[i].PercentRE,
                                                QC: message[i].QC
                                            });
                                            elem.save();
                                        }
                                    } else if (req.params.operation == 'qPCRraw') {
                                        for (var i = 0; i < message.length; i++) {
                                            var elem = new qPCRrawDataAggregation({
                                                UserId: req.session.user._id,
                                                ExtractionNumber: message[i].ExtractionNumber,
                                                PCRRunNumber: message[i].PCRRunNumber,
                                                ExtractionSampleNumber: message[i].ExtractionSampleNumber,
                                                PunchNumber: message[i].PunchNumber,
                                                AnimalID: message[i].AnimalID,
                                                TissueorSampleType: message[i].TissueorSampleType,
                                                CollectionDate: message[i].CollectionDate,
                                                DNAPerrxn: message[i].DNAPerrxn,
                                                SampleName: message[i].SampleName,
                                                WellPosition: message[i].WellPosition,
                                                CtMean: message[i].CtMean,
                                                CtSD: message[i].CtSD,
                                                QuantityMean: message[i].QuantityMean,
                                                QuantitySD: message[i].QuantitySD,
                                                QtyCVPercent: message[i].QtyCVPercent,
                                                CNPerug: message[i].CNPerug,
                                                Flag: message[i].Flag,
                                                QC: message[i].QC
                                            });
                                            elem.save();
                                        }
                                    } else if (req.params.operation == 'qPCRretest') {
                                        for (var i = 0; i < message.length; i++) {
                                            var elem = new qPCRretestInfoAggregation({
                                                UserId: req.session.user._id,
                                                ExtractionNumber: message[i].ExtractionNumber,
                                                PCRRunNumber: message[i].PCRRunNumber,
                                                ExtractionSampleNumber: message[i].ExtractionSampleNumber,
                                                PunchNumber: message[i].PunchNumber,
                                                AnimalID: message[i].AnimalID,
                                                TissueorSampleType: message[i].TissueorSampleType,
                                                CollectionDate: message[i].CollectionDate,
                                                DNAPerrxn: message[i].DNAPerrxn,
                                                SampleName: message[i].SampleName,
                                                WellPosition: message[i].WellPosition,
                                                CtMean: message[i].CtMean,
                                                CtSD: message[i].CtSD,
                                                QuantityMean: message[i].QuantityMean,
                                                QuantitySD: message[i].QuantitySD,
                                                QtyCVPercent: message[i].QtyCVPercent,
                                                CNPerug: message[i].CNPerug,
                                                Flag: message[i].Flag,
                                                QC: message[i].QC
                                            });
                                            elem.save();
                                        }
                                    } else if (req.params.operation == 'qPCReachqc') {
                                        for (var i = 0; i < message.length; i++) {
                                            var elem = new qPCRQCinDetail({
                                                UserId: req.session.user._id,
                                                PCRRunNumber: message[i].PCRRunNumber,
                                                ExtractionDate: message[i].ExtractionDate,
                                                Well: message[i].Well,
                                                WellPosition: message[i].WellPosition,
                                                Omit: message[i].Omit,
                                                SampleName: message[i].SampleName,
                                                TargetName: message[i].TargetName,
                                                Task: message[i].Task,
                                                Reporter: message[i].Reporter,
                                                Quencher: message[i].Quencher,
                                                CT: message[i].CT,
                                                CtMean: message[i].CtMean,
                                                CtSD: message[i].CtSD,
                                                Quantity: message[i].Quantity,
                                                QuantityMean: message[i].QuantityMean,
                                                QuantitySD: message[i].QuantitySD
                                            });
                                            elem.save();
                                        }
                                    } else if (req.params.operation == 'wesLinearRegressionDataSummary') {
                                        for (var i = 0; i < message.length; i++) {
                                            var elem = new wesLinearRegression({
                                                UserId: req.session.user._id,
                                                RunNumber: message[i].RunNumber,
                                                Slope: message[i].Slope,
                                                Intercept: message[i].Intercept,
                                                RSquare: message[i].RSquare,
                                            });
                                            elem.save();
                                        }
                                    } else if (req.params.operation == 'wesStandardCurveDataSummary') {
                                        for (var i = 0; i < message.length; i++) {
                                            var elem = new wesStandardCurve({
                                                UserId: req.session.user._id,
                                                RunNumber: message[i].RunNumber,
                                                Std: message[i].Std,
                                                TPP1ConcngPermL: message[i].TPP1ConcngPermL,
                                                Area: message[i].Area,
                                                BackCalculatedConcngPermL: message[i].BackCalculatedConcngPermL,
                                                PercentRE: message[i].PercentRE,
                                            });
                                            elem.save();
                                        }
                                    } else if (req.params.operation == 'wesUpperandLowerBondSummary') {
                                        for (var i = 0; i < message.length; i++) {
                                            var elem = new wesUpperandLowerBond({
                                                UserId: req.session.user._id,
                                                RunNumber: message[i].RunNumber,
                                                ULOQ: message[i].ULOQ,
                                                LLOQ: message[i].LLOQ,
                                            });
                                            elem.save();
                                        }

                                    } else if (req.params.operation == 'wesQCDataSummary') {
                                        for (var i = 0; i < message.length; i++) {
                                            var elem = new wesQCData({
                                                UserId: req.session.user._id,
                                                RunNumber: message[i].RunNumber,
                                                QCIn1To10CSF: message[i].QCIn1To10CSF,
                                                SpikedConcngPermL: message[i].SpikedConcngPermL,
                                                ConcngPermL: message[i].ConcngPermL,
                                                PercentRE: message[i].PercentRE,
                                            });
                                            elem.save();
                                        }

                                    } else if (req.params.operation == 'wesSampleAnalysisDataSummary') {
                                        for (var i = 0; i < message.length; i++) {
                                            var elem = new wesSampleAnalysis({
                                                UserId: req.session.user._id,
                                                RunNumber: message[i].RunNumber,
                                                TimePoint: message[i].TimePoint,
                                                AnimalID: message[i].AnimalID,
                                                ConcngPermL: message[i].ConcngPermL,
                                                Dilution: message[i].Dilution,
                                                AdjustedConcngPermL: message[i].AdjustedConcngPermL,
                                                Comment: message[i].Comment,
                                            });
                                            elem.save();
                                        }
                                    } else if (req.params.operation == 'nabDataSummary') {
                                        console.log(message);
                                        for (var i = 0; i < message.length; i++) {
                                            console.log(message[i].RunNumber);
                                            console.log(message[i] === undefined);
                                            var elem = new nabData({
                                                UserId: req.session.user._id,
                                                RunNumber: message[i].RunNumber,
                                                SampleNumber: message[i].SampleNumber,
                                                SubjectID: message[i].SubjectID,
                                                VisitName: message[i].VisitName,
                                                CollectionDate: message[i].CollectionDate,
                                                MINAverage: message[i].MINAverage,
                                                MAXAverage: message[i].MAXAverage,
                                                MAXEVAverage: message[i].MAXEVAverage,
                                                FACT1To100Average: message[i].FACT1To100Average,
                                                MINCVPercentage: message[i].MINCVPercentage,
                                                MAXCVPercentage: message[i].MAXCVPercentage,
                                                MAXEVCVPercentage: message[i].MAXEVCVPercentage,
                                                FACT1To100CVPercentage: message[i].FACT1To100CVPercentage,
                                                PercentageIMAXFACT1To100: message[i].PercentageIMAXFACT1To100,
                                                EVInterferenceMAXMAXEV: message[i].EVInterferenceMAXMAXEV,
                                                EVEfficiencyFACT1To100FACT1To100EV: message[i].EVEfficiencyFACT1To100FACT1To100EV,
                                                SN: message[i].SN,
                                                S1To1IMAXPercentage: message[i].S1To1IMAXPercentage,
                                                S1To2Point5IMAXPercentage: message[i].S1To2Point5IMAXPercentage,
                                                S1To5IMAXPercentage: message[i].S1To5IMAXPercentage,
                                                S1To10IMAXPercentage: message[i].S1To10IMAXPercentage,
                                                S1To100IMAXPercentage: message[i].S1To100IMAXPercentage,
                                                S1To1000IMAXPercentage: message[i].S1To1000IMAXPercentage,
                                                S1To1IEVPercentage: message[i].S1To1IEVPercentage,
                                                S1To2Point5IEVPercentage: message[i].S1To2Point5IEVPercentage,
                                                S1To5IEVPercentage: message[i].S1To5IEVPercentage,
                                                S1To10IEVPercentage: message[i].S1To10IEVPercentage,
                                                S1To100IEVPercentage: message[i].S1To100IEVPercentage,
                                                S1To1000IEVPercentage: message[i].S1To1000IEVPercentage,
                                                NAbTiter: message[i].NAbTiter,
                                                JustifyIfResultisInvalid: message[i].JustifyIfResultisInvalid,
                                            });
                                            elem.save();
                                        }
                                    } else {
                                        console.log(message);
                                    }
                                }
                            );
                            callback(null, 'abc\n');
                        },
                        two: function (callback) {
                            shell.end(function (err) {
                                console.log('The script work has been finished.');
                                if (err) {
                                    console.log('Error or Warning from Python script');
                                    res.status(200).send({error: err});
                                }
                                else {
                                    console.log('no error in python');
                                    rimraf(filepath, function (err) {
                                        if (err) throw err;
                                        console.log('able to delete uploaded files');
                                        return res.redirect('/' + req.params.operation);
                                    });
                                }
                            });
                            callback(null, 'xyz\n');
                        }
                    }, function (err, results) {
                        // console.log(results.one);
                        // console.log(results.two);
                    });
                });
            }
        });
    });
};
