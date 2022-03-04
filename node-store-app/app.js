var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var servicio1Router = require('./routes/servicio1');
<<<<<<< HEAD
var servicio2Router = require('./routes/servicio2');
=======
var servicio10Router = require('./routes/servicio10');
var servicio3 = require('./routes/servicio3');
>>>>>>> c541a2bb2e2fa8284b8993e97f715e598c899d15
var usersRouter = require('./routes/users');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/servicio1', servicio1Router);
<<<<<<< HEAD
app.use('/servicio2', servicio2Router);
=======
app.use('/servicio10', servicio10Router);
app.use('/servicio3', servicio3);
>>>>>>> c541a2bb2e2fa8284b8993e97f715e598c899d15

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
  res.render('error');
});

module.exports = app;
