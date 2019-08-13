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

app.get('/portforio-speaker', function(req, res) {
  res.render('pages/portforio-speaker');
});

app.get('/portforio-research', function(req, res) {
  res.render('pages/portforio-research');
});

app.get('/portforio-journal', function(req, res) {
  res.render('pages/portforio-journal');
});

app.get('/portforio-design', function(req, res) {
  res.render('pages/portforio-design');
});

app.get('/portforio-academic_service', function(req, res) {
  res.render('pages/portforio-academic_service');
});

app.get('/new_portforio', function(req, res) {
  res.render('pages/new_portforio');
});

app.listen(8080);
console.log('8080 is Running...');
