//imports
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

/**
 * Iniciando o app;
 * @type {Function}
 */
const app = express();
app.use(express.json());
app.use(cors());

/**
 * Iniciando a conexao com o MongoDB
 */
mongoose.connect(
    'mongodb://localhost:27017/cursoNodeAPI',
    {useNewUrlParser: true}
);

requireDir('./src/models');

const Product = mongoose.model("Product");

/**
 * use - Recebe qualquer tipo de requisicao
 * require - Manda para o arquivo routes
 */
app.use('/api', require('./src/routes'));

app.listen(3005);