var numeral = require('numeral');
var bcrypt = require('bcrypt-nodejs');
var dateFormat = require('dateformat');
var PythonShell = require('python-shell');
var multer = require('multer');
var fs = require('fs');
var upload = multer({
  dest: 'uploads/'
});

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
    var files = req.files;
    for (var i = 0; i < files.length; i++) {
      console.log('文件类型：%s', files[i].mimetype);
      console.log('原始文件名：%s', files[i].originalname);
      console.log('文件大小：%s', files[i].size);
      console.log('文件保存路径：%s', files[i].path);
    }
    res.send({ret_code: '0'});
}
