var QCSummary = require('../models/QCSummary');
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
