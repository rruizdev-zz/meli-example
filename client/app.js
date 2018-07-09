const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const compression = require('compression');
const sass = require('node-sass-middleware');

const searchRouter = require('./routes/search');
//const itemRouter = require('./routes/item');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());
app.use('/stylesheets', sass({
    src: path.join(__dirname, 'scss'),
    dest: path.join(__dirname, 'public/stylesheets'),
    debug: true,
    outputStyle: 'compressed'
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', searchRouter);
//app.use('/items', itemRouter);

app.set('view engine', 'pug');

module.exports = app;
