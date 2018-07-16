var home = require('../app/controllers/home');
var show = require('../app/controllers/show');
//you can include all your controllers

module.exports = function (app, passport) {

    app.get('/login', home.login);
    app.get('/signup', home.signup);

    app.get('/', home.loggedIn, home.home);//home
    app.get('/home', home.loggedIn, home.home);//home

    app.get('/qc', home.loggedIn, show.qc);//qc
    app.get('/raw', home.loggedIn, show.raw);//raw
    // app.get('/retest', home.loggedIn, home.retest);//retest
    // app.get('/eachqc', home.loggedIn, home.eachqc);//eachqc

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
