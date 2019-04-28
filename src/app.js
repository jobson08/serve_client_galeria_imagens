const express = require("express");
const morgan = require('morgan');
const mongoose =require('mongoose');
const bodyParser = require('body-parser');

const app = express();


//DB config
//const db = require('./config/keys').mongoURI;

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());


//Routes
app.use(require('./routes'));

//Sentings
const port = process.env.PORT || 4000;

//starta o sevidor
app.listen(port, ( ()=> console.log(`Sevidor na porta ${port}`)));


module.exports = app;