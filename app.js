var createError = require('http-errors');
var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index-sr');
var homeRouter = require('./routes/home-sr');
var loginRouter = require('./routes/login-sr');

var app = express();
var config = require('./webpack.config.js');
var compiler = webpack(config);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'dist')));
app.use(webpackDevMiddleware(compiler, {
  publicPath: '/'
}));

app.use('/', indexRouter);
app.use('/home', homeRouter);
app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {title: 'ace - Not Found'});
});

module.exports = app;
