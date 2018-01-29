
  var Rebase = require('re-base');
  var firebase = require('firebase');
  var app = firebase.initializeApp({
        apiKey: "AIzaSyBiq5acqj6Wbc0VROJbfoT89c5rm9bmETQ",
        authDomain: "billy-party.firebaseapp.com",
        databaseURL: "https://billy-party.firebaseio.com",
        storageBucket: "billy-party.appspot.com",
        messagingSenderId: "148094835278"
  });
  var db = firebase.database(app);
  var base = Rebase.createClass(app.database());
