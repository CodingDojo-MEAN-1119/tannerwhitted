const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 8000;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoting_dojo_app');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

app.listen(port);