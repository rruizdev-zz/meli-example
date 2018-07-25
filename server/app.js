const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const compression = require('compression');

const apiRouter = require('./routes/api');
const itemsRouter = require('./routes/items');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(compression());

app.use('/api', apiRouter);
app.use('/api/items', itemsRouter);

app.use((request, response, next) => {
  next(createError(404));
});

app.use((error, request, response, next) => {
  response.locals.message = error.message;
  response.locals.error = request.app.get('env') === 'development' ? error : {};

  response.status(error.status || 500);
  response.send({
    stat: error.status || 500,
    msg: error.message
  });
});

module.exports = app;
