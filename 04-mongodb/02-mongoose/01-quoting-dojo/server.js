const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const port = 8000;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
mongoose.connect('mongodb://localhost/quoting_dojo_app');

const quoteSchema = new mongoose.Schema({
  name: String,
  quote: String
});

const Quote = mongoose.model('quotes', quoteSchema);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/quotes', function(req, res) {
  Quote.find({}, function(err, quotes) {
    if (err) { console.log(err); }
    res.render('quotes', { quotes: quotes });
  });
});

app.post('/quotes', function(req, res) {
  Quote.create(req.body, function(err) {
    if (err) { console.log(err); }
    res.redirect('/quotes');
  });
});

app.listen(port);