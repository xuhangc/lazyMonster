var home = require('../app/controllers/home');
var show = require('../app/controllers/show');
var download = require('../app/controllers/download')
//you can include all your controllers

module.exports = function (app, passport) {

    app.get('/login', home.login);
    app.get('/signup', home.signup);

    app.get('/', home.loggedIn, home.home);//home
    app.get('/home', home.loggedIn, home.home);//home

    app.get('/qPCRqc', home.loggedIn, show.qPCRqc);//qc
    app.get('/qPCRraw', home.loggedIn, show.qPCRraw);//raw
    app.get('/qPCRretest', home.loggedIn, show.qPCRretest);//retest
    app.get('/qPCReachqc', home.loggedIn, show.qPCReachqc);//eachqc

    app.get('/wesLinearRegressionDataSummary', home.loggedIn, show.wesLinearRegressionDataSummary); //wes Linear Regression
    app.get('/wesStandardCurveDataSummary', home.loggedIn, show.wesStandardCurveDataSummary); //wes Standard Curve
    app.get('/wesUpperandLowerBondSummary', home.loggedIn, show.wesUpperandLowerBondSummary); //wes Upper and Lower Bond
    app.get('/wesQCDataSummary', home.loggedIn, show.wesQCDataSummary); //wes QC data
    app.get('/wesSampleAnalysisDataSummary', home.loggedIn, show.wesSampleAnalysisDataSummary); //wes Sample Analysis data

    app.get('/nabDataSummary', home.loggedIn, show.nabDataSummary); // NAb data

    app.get('/qPCRqc/download', home.loggedIn, download.qPCRqcSummaryDownload); //qc download
    app.get('/qPCRraw/download', home.loggedIn, download.qPCRrawDataAggregationDownload);
    app.get('/qPCRretest/download', home.loggedIn, download.qPCRretestInfoAggregationDownload);
    app.get('/qPCReachqc/download', home.loggedIn, download.qPCRQCinDetailDownload);

    app.get('/wesLinearRegressionDataSummary/download', home.loggedIn, download.wesLinearRegressionDownload);
    app.get('/wesStandardCurveDataSummary/download', home.loggedIn, download.wesStandardCurveDownload);
    app.get('/wesUpperandLowerBondSummary/download', home.loggedIn, download.wesUpperandLowerBondDownload);
    app.get('/wesQCDataSummary/download', home.loggedIn, download.wesQCDataDownload);
    app.get('/wesSampleAnalysisDataSummary/download', home.loggedIn, download.wesSampleAnalysisDownload);

    app.get('/nabDataSummary/download', home.loggedIn, download.nabDataDownload);

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/home', // redirect to the secure profile section
        failureRedirect: '/signup', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/home', // redirect to the secure profile section
        failureRedirect: '/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    app.post('/upload/:operation', home.loggedIn, home.upload);
}
