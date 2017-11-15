const Twit = require('twit')
const config = require('./config.js');
const express = require('express');
const app = express();
let tweets = [];
let friends = [];
let messages = [];
let profilePhoto = "";
//
app.use('/static', express.static('public'));
//
app.set('view engine', 'pug');
//

app.get('/', (req, res) => {
  config.keys.get('statuses/user_timeline', { screen_name: 'clmontgo' },  function (err, data, response) {

    res.locals.profilePhoto =  data[0]['user']['profile_image_url'];

    for (var i = 0; i < 5; i++) {
      tweets.push(data[i].text);
    }
    res.locals.tweets = tweets;
    //res.locals.name = tweets;

    config.keys.get('friends/list', { screen_name: 'clmontgo' },  function (err, data, response) {
      //console.log('second')
      for (var i = 0; i < 5; i++) {
        friends.push(data['users'][i]['name']);
        }

      res.locals.friends = friends;


        config.keys.get('direct_messages', { screen_name: 'clmontgo' },  function (err, data, response) {

          //for (var i = 0; i < 5; i++) {
          //  console.log('entered')
          //  if (i > messages.length - 1) {
          //    break;
          //    console.log('exit')
          //  } else {
          //    console.log('not exit')
          //    messages.push(data[i]['text']);
          //  }
          //}

          //messages = data['text']
          console.log(messages)
          res.locals.messages = messages;

          res.render('index');
          tweets = [];
          friends = [];
          messages = [];
      });
    });
  });
});



app.listen(3000, () => {
  console.log('the application is running on port 3000');
})
