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

    app.get('/tissueWesLinearRegressionDataSummary', home.loggedIn, show.tissueWesLinearRegressionDataSummary);
    app.get('/tissueWesStandardCurveDataSummary', home.loggedIn, show.tissueWesStandardCurveDataSummary);
    app.get('/tissueWesUpperandLowerBondSummary', home.loggedIn, show.tissueWesUpperandLowerBondSummary);
    app.get('/tissueWesQCDataSummary', home.loggedIn, show.tissueWesQCDataSummary);
    app.get('/tissueWesSampleAnalysisDataSummary', home.loggedIn, show.tissueWesSampleAnalysisDataSummary);
    app.get('/tissueWesSampleAnalysis88DataSummary', home.loggedIn, show.tissueWesSampleAnalysis88DataSummary);

    app.get('/gaaEnzymaticStandardCurveDataSummary', home.loggedIn, show.gaaEnzymaticStandardCurveDataSummary);
    app.get('/gaaEnzymaticQCDataSummary', home.loggedIn, show.gaaEnzymaticQCDataSummary);
    app.get('/gaaEnzymaticUpperandLowerBondSummary', home.loggedIn, show.gaaEnzymaticUpperandLowerBondSummary);
    app.get('/gaaEnzymaticSampleAnalysisDataSummary', home.loggedIn, show.gaaEnzymaticSampleAnalysisDataSummary);

    app.get('/qPCRqc/download', home.loggedIn, download.qPCRqcSummaryDownload); //qc download
    app.get('/qPCRraw/download', home.loggedIn, download.qPCRrawDataAggregationDownload); // sample data download
    app.get('/qPCRretest/download', home.loggedIn, download.qPCRretestInfoAggregationDownload); // retest data download
    app.get('/qPCReachqc/download', home.loggedIn, download.qPCRQCinDetailDownload); // qc detail download

    app.get('/wesLinearRegressionDataSummary/download', home.loggedIn, download.wesLinearRegressionDownload);
    app.get('/wesStandardCurveDataSummary/download', home.loggedIn, download.wesStandardCurveDownload);
    app.get('/wesUpperandLowerBondSummary/download', home.loggedIn, download.wesUpperandLowerBondDownload);
    app.get('/wesQCDataSummary/download', home.loggedIn, download.wesQCDataDownload);
    app.get('/wesSampleAnalysisDataSummary/download', home.loggedIn, download.wesSampleAnalysisDownload);

    app.get('/nabDataSummary/download', home.loggedIn, download.nabDataDownload);

    app.get('/tissueWesLinearRegressionDataSummary/download', home.loggedIn, download.tissueWesLinearRegressionDownload);
    app.get('/tissueWesStandardCurveDataSummary/download', home.loggedIn, download.tissueWesStandardCurveDownload);
    app.get('/tissueWesUpperandLowerBondSummary/download', home.loggedIn, download.tissueWesUpperandLowerBondDownload);
    app.get('/tissueWesQCDataSummary/download', home.loggedIn, download.tissueWesQCDataDownload);
    app.get('/tissueWesSampleAnalysisDataSummary/download', home.loggedIn, download.tissueWesSampleAnalysisDownload);
    app.get('/tissueWesSampleAnalysis88DataSummary/download', home.loggedIn, download.tissueWesSampleAnalysis88Download);

    app.get('/gaaEnzymaticStandardCurveDataSummary/download', home.loggedIn, download.gaaEnzymaticStandardCurveDownload);
    app.get('/gaaEnzymaticQCDataSummary/download', home.loggedIn, download.gaaEnzymaticQCDataDownload);
    app.get('/gaaEnzymaticUpperandLowerBondSummary/download', home.loggedIn, download.gaaEnzymaticUpperandLowerBondDownload);
    app.get('/gaaEnzymaticSampleAnalysisDataSummary/download', home.loggedIn, download.gaaEnzymaticSampleAnalysisDownload);
    
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
