const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const compression = require('compression');
const createError = require('http-errors');
const sass = require('node-sass-middleware');
const uglify = require("uglify-js");
const fs = require('fs')
const minify = require('minify-images')
const config = require('./config');

const routeSearch = require('./routes/search');
const routeItem = require('./routes/item');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/stylesheets', sass({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public/stylesheets'),
    debug: true,
    outputStyle: 'compressed'
}));

app.use('/', routeSearch);
app.use('/items', routeItem);

var allCode = "";
config.scripts.forEach(script => {
    fs.readFile(path.join(__dirname, 'scripts', script), 'utf8', (err, data) => {
        allCode += uglify.minify(data, { ie8: true, mangle: false }).code;
        fs.writeFileSync(path.join(__dirname, 'public/javascripts/meli.min.js'), allCode, 'utf8');
    });    
});

minify.compress({
    src: path.join(__dirname, 'images'),
    dest: path.join(__dirname, 'public/images'),
});

app.use((req, res, next) => {
    next(createError(404));
});

app.use((err, req, res, next) => {
    res.render('error', { status: (err.status || 500) });
});

app.set('view engine', 'pug');

module.exports = app;
