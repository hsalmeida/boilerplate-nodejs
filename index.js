var express = require('express');
var morgan = require('morgan');
var path = require('path');
var firebase = require("firebase");
var app = express();

var config = {
    apiKey: "AIzaSyDaGeeXHAy8prgu3cs1AAqyL3VYWPsHyJo",
    authDomain: "smartdelivery-154417.firebaseapp.com",
    databaseURL: "https://smartdelivery-154417.firebaseio.com",
    storageBucket: "smartdelivery-154417.appspot.com",
    messagingSenderId: "121932600601"
};
firebase.initializeApp(config);

app.use(morgan('combined'));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(80, function () {
  console.log('Listening on port 80');
  console.log(firebase.app().name);
});
