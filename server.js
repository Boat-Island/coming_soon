var path = require('path');
var express = require('express');
// var sslRedirect = require('heroku-ssl-redirect');

var app = express();

app.use(express.static(path.join(__dirname, 'build')));
var cors = require('cors')

// app.use(sslRedirect.default());

app.use(cors())
app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.set('port', process.env.PORT || 8083);

var server = app.listen(app.get('port'), function () {
    console.log('listening on port ', server.address().port);
});