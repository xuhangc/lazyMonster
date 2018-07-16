var QCSummary = require('../models/QCSummary');
var rawDataAggregation = require('../models/rawDataAggregation')
var retestInfoAggregation = require('../models/retestInfoAggregation')
var QCinDetail = require('../models/QCinDetail')
var mongoose = require('mongoose');

exports.qc = function(req, res) {
  QCSummary.find({}, function(err, result) {
    res.render('qc.ejs', {
      error: req.flash("error"),
      success: req.flash("success"),
      session: req.session,
      result: result
    });
  });
}

exports.raw = function(req, res) {
    rawDataAggregation.find({}, function(err, result) {
        res.render('raw.ejs', {
            error: req.flash("error"),
            success: req.flash("success"),
            session: req.session,
            result: result
        });
    });
}

exports.retest = function(req, res) {
    retestInfoAggregation.find({}, function(err, result) {
        res.render('retest.ejs', {
            error: req.flash("error"),
            success: req.flash("success"),
            session: req.session,
            result: result
        });
    });
}

exports.eachqc = function(req, res) {
    QCinDetail.find({}, function(err, result) {
        res.render('eachqc.ejs', {
            error: req.flash("error"),
            success: req.flash("success"),
            session: req.session,
            result: result
        });
    });
}