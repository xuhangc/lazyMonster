var express = require('express');
var app = express();
var port = process.env.PORT || 8042;
var passport = require('passport');
var flash = require('connect-flash');
var path = require('path');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var expectCt = require('expect-ct');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var Raven = require('raven');
Raven.config('https://5a8c3ce8df7a4efca5850e650ab32c20@sentry.io/1264633').install();

app.use(Raven.requestHandler());
/***************Mongodb configuratrion********************/
var mongoose = require('mongoose');
var configDB = require('./config/database.js');
//configuration ===============================================================
mongoose.connect(configDB.url, {useNewUrlParser: true}); // connect to our database


require('./config/passport')(passport); // pass passport for configuration

//set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
//app.use(bodyParser()); // get information from html forms

//view engine setup
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');
//app.set('view engine', 'ejs'); // set up ejs for templating


//required for passport
//app.use(session({ secret: 'iloveyoudear...' })); // session secret

app.use(session({
    secret: "Popeyes", // session secret
    resave: true,
    rolling: true,
    saveUninitialized: false,
    cookie: {
        expires: 10 * 60 * 1000  //  auto log out after 10 min
    }
}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
app.use(helmet());
app.use(helmet.noCache());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(expectCt({
    enforce: true,
    maxAge: 123
}));

app.use("/assets", express.static(__dirname + "/assets"));
app.use("/public", express.static(__dirname + "/public"));

// app.get('*', function(req,res,next) {
//       if(req.headers['x-forwarded-proto'] != 'https')
//         res.redirect('https://'+req.hostname + ":" + port +req.url)
//       else
//         next() /* Continue to other routes if we're not redirecting */
// });

// routes ======================================================================
require('./config/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport


//launch ======================================================================
const server = app.listen(port);
server.timeout = 2400000;    //timeout setting 40 mins
console.log('The magic happens on port ' + port);

//catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(404).render('404', {title: "Sorry, page not found", session: req.sessionbo});
});

app.use(function (req, res, next) {
    res.status(500).render('404', {title: "Sorry, page not found"});
});
exports = module.exports = app;
