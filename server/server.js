var express = require('express'),
    multer = require('multer'),
    passport = require('passport'),
    session = require('express-session'),
    path = require('path'),
    config = require('./config'),
    app = express();

global.config = config;

var auth = require('./modules/auth')(app, passport);

app.use(session({
    secret: 'es6',
    resave: false,
    saveUninitialized: true
}));

// provide req.body
app.use(multer());

app.get('/api', function(req, res) {
    res.end("api");
});

app.post('/auth',
    passport.authenticate('ldapauth', {
        badRequestMessage: 'bad reg',
        invalidCredentials: 'invalid',
        userNotFound: 'not found',
        session: false
    }),
    function(req, res, next) {
        res.send({
            status: 'ok'
        });
    }
);


app.set('port', config.port | 8080);
app.use(express.static(path.join(__dirname, '../client')));

app.listen(app.get('port'), function(err) {
    if (err) {
        throw err;
    }
    console.log('http://localhost:' + app.get('port') + '/');
})
