var qPCRQCSummary = require('../models/qPCRQCSummary');
var qPCRRawDataAggregation = require('../models/qPCRrawDataAggregation')
var qPCRRetestInfoAggregation = require('../models/qPCRretestInfoAggregation')
var qPCRQCinDetail = require('../models/qPCRQCinDetail')
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