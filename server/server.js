var express = require('express'),
    path = require('path'),
    config = require('./config'),
    app = express();


// Use the middleware for the index page located in a separate module
app.get('/api',  function(req, res) { res.end("api"); } );


app.set('port', config.port | 8080);
app.use(express.static(path.join(__dirname, '../client')));

app.listen(app.get('port'), function(err) {
    if (err) {
        throw err;
    }
    console.log('http://localhost:' + app.get('port') + '/');
})
