var express = require('express'),
    multer = require('multer'),
    passport = require('passport'),
    session = require('express-session'),
    path = require('path'),
    config = require('./config'),
    app = express();

global.config = config;

var auth = require('./modules/auth')(passport);
console.log(auth);

app.use(session({
    secret: 'es6',
    resave: false,
    saveUninitialized: true
}));

// provide req.body
app.use(multer());

// initialize passport
app.use(passport.initialize());
app.use(passport.session());


app.get('/', function(req,res,next) { console.log(req.session.passport); return next(); });

app.get('/api', function(req, res) {
    res.end("api");
});
app.get('/api/auth', function(req, res) {
    res.end('Error login');
});

app.post('/api/auth', passport.authenticate('ldapauth', {
    successRedirect: '/',
    failureRedirect: '/auth',
    session: true
}));


app.set('port', config.port | 8080);
app.use(express.static(path.join(__dirname, '../client')));

app.listen(app.get('port'), function(err) {
    if (err) {
        throw err;
    }
    console.log('http://localhost:' + app.get('port') + '/');
})
