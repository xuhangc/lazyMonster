var numeral = require('numeral');
var bcrypt = require('bcrypt-nodejs');
var dateFormat = require('dateformat');
var PythonShell = require('python-shell');
var fs = require('fs');
var mkdirp = require('mkdirp');
var multer = require('multer');
var path = require('path');
var QCSummary = require('../models/QCSummary');
var mongoose = require('mongoose');

exports.loggedIn = function(req, res, next) {
  if (req.session.user) { // req.session.passport._id
    next();
  } else {
    res.redirect('/login');
  }
}

exports.home = function(req, res) {
  res.render('home.ejs', {
    error: req.flash("error"),
    success: req.flash("success"),
    session: req.session,
  });
}

exports.signup = function(req, res) {
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

exports.login = function(req, res) {
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

exports.upload = function(req, res) {
    var dir_name = Date.now();
    mkdirp('uploads/' + dir_name, function(err) {
      var storage = multer.diskStorage({
        destination: 'uploads/' + dir_name,
        filename: function ( req, file, cb ) {
            cb(null, file.originalname);
        }
      });
      var upload = multer({ storage: storage }).any();
      upload(req, res, function(err) {
          if(err) {
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
            var options = {
              mode: 'json',
              pythonOptions: ['-u'], // get print results in real-time
              scriptPath: path.join(__dirname + "../../../python"),
              args: [filepath]
            };
            var shell = new PythonShell('qPCR_aggregation_v2.py', options);
            shell.on('message', function (message) {
              // console.log(message);
              for(var i = 0; i < message.length; i++) {
                var elem = new QCSummary({
                    PCRRunNum: message[i].PCRRunNum,
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
            });
            shell.end(function (err) {
              console.log('The script work has been finished.');
              if(err) { res.status(200).send({ error: err }); }
              else {
                res.status(200).send({ message : 'Success' });
              }
            });
          }
      });
    });
}
