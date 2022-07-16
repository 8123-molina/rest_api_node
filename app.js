const express = require('express');
const app = express();
const morgan = require('morgan');

const rotaCard = require('./routes/cards');
const rotaCategoria = require('./routes/categorias');

app.use(morgan('dev'));

app.use('/card', rotaCard);
app.use('/categoria', rotaCategoria);

module.exports = app;