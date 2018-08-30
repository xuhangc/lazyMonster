var qPCRQCSummary = require('../models/qPCRQCSummary');
var qPCRRawDataAggregation = require('../models/qPCRrawDataAggregation');
var qPCRRetestInfoAggregation = require('../models/qPCRretestInfoAggregation');
var qPCRQCinDetail = require('../models/qPCRQCinDetail');

var wesLinearRegression = require('../models/wesLinearRegression');
var wesStandardCurve = require('../models/wesStandardCurve');
var wesUpperandLowerBond = require('../models/wesUpperandLowerBond');
var wesQCData = require('../models/wesQCData');
var wesSampleAnalysis = require('../models/wesSampleAnalysis');

var nabData = require('../models/nabData');

var tissueWesLinearRegression = require('../models/tissueWesLinearRegression');
var tissueWesStandardCurve = require('../models/tissueWesStandardCurve');
var tissueWesUpperandLowerBond = require('../models/tissueWesUpperandLowerBond');
var tissueWesQCData = require('../models/tissueWesQCData');
var tissueWesSampleAnalysis = require('../models/tissueWesSampleAnalysis');
var tissueWesSampleAnalysis88 = require('../models/tissueWesSampleAnalysis88');

var gaaEnzymaticUpperandLowerBond = require('../models/gaaEnzymaticUpperandLowerBond');
var gaaEnzymaticQCData = require('../models/gaaEnzymaticQCData');
var gaaEnzymaticSampleAnalysis = require('../models/gaaEnzymaticSampleAnalysis');
var gaaEnzymaticStandardCurve  = require('../models/gaaEnzymaticStandardCurve');

var mongoose = require('mongoose');

exports.qPCRqc = function (req, res) {
    qPCRQCSummary.find({UserId: req.session.user._id}, function (err, result) {
        res.render('qPCRqc.ejs', {
            error: req.flash("error"),
            success: req.flash("success"),
            session: req.session,
            result: result
        });
    });
}

exports.qPCRraw = function (req, res) {
    qPCRRawDataAggregation.find({UserId: req.session.user._id}, function (err, result) {
        res.render('qPCRraw.ejs', {
            error: req.flash("error"),
            success: req.flash("success"),
            session: req.session,
            result: result
        });
    });
}

exports.qPCRretest = function (req, res) {
    qPCRRetestInfoAggregation.find({UserId: req.session.user._id}, function (err, result) {
        res.render('qPCRretest.ejs', {
            error: req.flash("error"),
            success: req.flash("success"),
            session: req.session,
            result: result
        });
    });
}

exports.qPCReachqc = function (req, res) {
    qPCRQCinDetail.find({UserId: req.session.user._id}, function (err, result) {
        res.render('qPCReachqc.ejs', {
            error: req.flash("error"),
            success: req.flash("success"),
            session: req.session,
            result: result
        });
    });
}

exports.wesLinearRegressionDataSummary = function (req, res) {
    wesLinearRegression.find({UserId: req.session.user._id}, function (err, result) {
        res.render('wesLinearRegressionDataSummary.ejs', {
            error: req.flash("error"),
            success: req.flash("success"),
            session: req.session,
            result: result
        });
    });
}


exports.wesStandardCurveDataSummary = function (req, res) {
    wesStandardCurve.find({UserId: req.session.user._id}, function (err, result) {
        res.render('wesStandardCurveDataSummary.ejs', {
            error: req.flash("error"),
            success: req.flash("success"),
            session: req.session,
            result: result
        });
    });
}

exports.wesUpperandLowerBondSummary = function (req, res) {
    wesUpperandLowerBond.find({UserId: req.session.user._id}, function (err, result) {
        res.render('wesUpperandLowerBondSummary.ejs', {
            error: req.flash("error"),
            success: req.flash("success"),
            session: req.session,
            result: result
        });
    });
}

exports.wesQCDataSummary = function (req, res) {
    wesQCData.find({UserId: req.session.user._id}, function (err, result) {
        res.render('wesQCDataSummary.ejs', {
            error: req.flash("error"),
            success: req.flash("success"),
            session: req.session,
            result: result
        });
    });
}

exports.wesSampleAnalysisDataSummary = function (req, res) {
    wesSampleAnalysis.find({UserId: req.session.user._id}, function (err, result) {
        res.render('wesSampleAnalysisDataSummary.ejs', {
            error: req.flash("error"),
            success: req.flash("success"),
            session: req.session,
            result: result
        });
    });
}

exports.nabDataSummary = function (req, res) {
    nabData.find({UserId: req.session.user._id}, function (err, result) {
        res.render('nabDataSummary.ejs', {
            error: req.flash("error"),
            success: req.flash("success"),
            session: req.session,
            result: result
        });
    });
}

exports.tissueWesLinearRegressionDataSummary = function (req, res) {
    tissueWesLinearRegression.find({UserId: req.session.user._id}, function (err, result) {
        res.render('tissueWesLinearRegressionDataSummary.ejs', {
            error: req.flash("error"),
            success: req.flash("success"),
            session: req.session,
            result: result
        });
    });
}

exports.tissueWesStandardCurveDataSummary = function (req, res) {
    tissueWesStandardCurve.find({UserId: req.session.user._id}, function (err, result) {
        res.render('tissueWesStandardCurveDataSummary.ejs', {
            error: req.flash("error"),
            success: req.flash("success"),
            session: req.session,
            result: result
        });
    });
}

exports.tissueWesUpperandLowerBondSummary = function (req, res) {
    tissueWesUpperandLowerBond.find({UserId: req.session.user._id}, function (err, result) {
        res.render('tissueWesUpperandLowerBondSummary.ejs', {
            error: req.flash("error"),
            success: req.flash("success"),
            session: req.session,
            result: result
        });
    });
}

exports.tissueWesQCDataSummary = function (req, res) {
    tissueWesQCData.find({UserId: req.session.user._id}, function (err, result) {
        res.render('tissueWesQCDataSummary.ejs', {
            error: req.flash("error"),
            success: req.flash("success"),
            session: req.session,
            result: result
        });
    });
}

exports.tissueWesSampleAnalysisDataSummary = function (req, res) {
    tissueWesSampleAnalysis.find({UserId: req.session.user._id}, function (err, result) {
        res.render('tissueWesSampleAnalysisDataSummary.ejs', {
            error: req.flash("error"),
            success: req.flash("success"),
            session: req.session,
            result: result
        });
    });
}

exports.tissueWesSampleAnalysis88DataSummary = function (req, res) {
    tissueWesSampleAnalysis88.find({UserId: req.session.user._id}, function (err, result) {
        res.render('tissueWesSampleAnalysis88DataSummary.ejs', {
            error: req.flash("error"),
            success: req.flash("success"),
            session: req.session,
            result: result
        });
    });
}

exports.gaaEnzymaticStandardCurveDataSummary = function (req, res) {
    gaaEnzymaticStandardCurve.find({UserId: req.session.user._id}, function (err, result) {
        res.render('gaaEnzymaticStandardCurveDataSummary.ejs', {
            error: req.flash("error"),
            success: req.flash("success"),
            session: req.session,
            result: result
        });
    });
}

exports.gaaEnzymaticQCDataSummary = function (req, res) {
    gaaEnzymaticQCData.find({UserId: req.session.user._id}, function (err, result) {
        res.render('gaaEnzymaticQCDataSummary.ejs', {
            error: req.flash("error"),
            success: req.flash("success"),
            session: req.session,
            result: result
        });
    });
}

exports.gaaEnzymaticUpperandLowerBondSummary = function (req, res) {
    gaaEnzymaticUpperandLowerBond.find({UserId: req.session.user._id}, function (err, result) {
        res.render('gaaEnzymaticUpperandLowerBondSummary.ejs', {
            error: req.flash("error"),
            success: req.flash("success"),
            session: req.session,
            result: result
        });
    });
}

exports.gaaEnzymaticSampleAnalysisDataSummary = function (req, res) {
    gaaEnzymaticSampleAnalysis.find({UserId: req.session.user._id}, function (err, result) {
        res.render('gaaEnzymaticSampleAnalysisDataSummary.ejs', {
            error: req.flash("error"),
            success: req.flash("success"),
            session: req.session,
            result: result
        });
    });
}