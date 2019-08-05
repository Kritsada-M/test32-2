//npm modules
const express = require('express');
const bodyParser = require('body-parser')
const app = express();



app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  limit: '150mb',
  extended: false ,
}));


//---- set the view engine to ejs
app.set('view engine', 'ejs');



app.get('/', function(req, res) {
  res.render('pages/index');
});

app.get('/profile', function(req, res) {
  res.render('pages/profile');
});

app.get('/portforio', function(req, res) {
  res.render('pages/portforio');
});

app.listen(8080);
console.log('8080 is Running...');
