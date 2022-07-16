const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const rotaCard = require('./routes/cards');
const rotaCategoria = require('./routes/categorias');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/card', rotaCard);
app.use('/categoria', rotaCategoria);

app.use((req, res, next) => {
    const erro = new Error('Não encontrado, solicitação inexistente');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        error: {
            mensagem: error.message
        }
    })
})
module.exports = app;