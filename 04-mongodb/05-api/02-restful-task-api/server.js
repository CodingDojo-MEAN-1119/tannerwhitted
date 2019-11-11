const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;


app.listen(port, ()=> console.log("listening on port: "+ port));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static( __dirname + '/public/dist/public' ));

const connect = require('./server/config/database')(app);
const routes =require('./server/config/routes/routes')(app);
