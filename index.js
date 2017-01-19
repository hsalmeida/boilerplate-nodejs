var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();

app.use(morgan('combined'));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(80, function () {
    var firebase = require('./config/db/db');
    var enter = firebase.database().ref('enterprise');
    enter.once('value').then(function (snap) {
        console.log(snap.val().bompreco);
    });
    console.log('Listening on port 80');
});
