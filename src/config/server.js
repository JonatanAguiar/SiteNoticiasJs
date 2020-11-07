var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.set('views', './src/views'); //diz onde fica o diretorio de views

module.exports = app;