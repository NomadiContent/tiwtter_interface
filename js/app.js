const Twit = require('twit')
const config = require('./config.js');
const express = require('express');
const app = express();
let tweets = [];
let friends = [];
let messages = [];

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

function myTweets() {
  config.keys.get('statuses/user_timeline', { screen_name: 'clmontgo' },  function (err, data, response) {

    for (var i = 0; i < 5; i++) {
      tweets.push(data[i].text);
    }
    console.log(data);


  })
}

myTweets();

//app.use('/', () => {

//});

app.get('/', (req, res) => {
  config.keys.get('statuses/user_timeline', { screen_name: 'clmontgo' },  function (err, data, response) {
    res.locals.tweets = [];

    for (var i = 0; i < 5; i++) {
      res.locals.tweets.push(data[i].text);
    }

    res.render('index');

  });

});



app.listen(3000, () => {
  console.log('the application is running on port 3000');
})
