const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const mongoose = require('mongoose');
app.use(express.static('public'));


app.get('/', function(req, res){

});

app.listen(process.env.PORT || 8080);

exports.app = app;
