const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    port = 8000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const connection = mongoose.connect("mongodb://localhost/mongoose_dashboard_app");

const MongooseSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    color: String
});

const Mongoose = mongoose.model('Mongoose', MongooseSchema);

app.get('/', function(req, res){
  Mongoose.find({}, function(err, results){
    if (err) { console.log(err); }
    res.render('index', { Mongooses: results });
  });
});

app.post('/', function(req, res){
  Mongoose.create(req.body, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/')
  });
});

app.get('/new', function(req, res){
  res.render('new');
});

app.get('/:id', function(req, res){
  Mongoose.find({ _id: req.params.id }, function(err, response) {
    if (err) { console.log(err); }
    res.render('show');
  });
});

app.get('/:id/edit/', function(req, res){
  Mongoose.find({ _id: req.params.id }, function(err, response) {
    if (err) { console.log(err); }
    res.render('edit', { Mongoose: response[0] });
  })
});

app.post('/:id', function(req, res){
  Mongoose.update({ _id: req.params.id }, req.body, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/');
  });
});

app.post('/:id/delete', function(req, res){
  Mongoose.remove({ _id: req.params.id }, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/');
  });
});


app.listen(port, function(){
  console.log("Running on ", port);
});