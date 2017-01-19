var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyDaGeeXHAy8prgu3cs1AAqyL3VYWPsHyJo",
    authDomain: "smartdelivery-154417.firebaseapp.com",
    databaseURL: "https://smartdelivery-154417.firebaseio.com",
    storageBucket: "smartdelivery-154417.appspot.com",
    messagingSenderId: "121932600601"
};
firebase.initializeApp(config);

module.exports = firebase;