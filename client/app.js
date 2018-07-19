const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const compression = require('compression');
const createError = require('http-errors');
const sass = require('node-sass-middleware');

const routeSearch = require('./routes/search');
const routeItem = require('./routes/item');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());
app.use('/stylesheets', sass({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public/stylesheets'),
    debug: true,
    outputStyle: 'compressed'
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routeSearch);
app.use('/items', routeItem);

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/scripts', express.static(path.join(__dirname, 'scripts')));

app.use((request, response, next) => {
    next(createError(404));
});

app.use((error, request, response, next) => {
    response.render('error', { status: error.status || 500 });
});

app.set('view engine', 'pug');

module.exports = app;
