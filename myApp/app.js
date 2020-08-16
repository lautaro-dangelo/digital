var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');

var apiProductosRouter = require('./routes/api/productos');
var apiUsuariosRouter = require('./routes/api/usuarios');

var indexRouter = require('./routes/index');
var usuariosRouter = require('./routes/usuarios');
var productosRouter = require('./routes/productos');
var carritoRouter = require('./routes/carrito');

var logMiddleware = require('./middlewares/logMiddleware');
var cookieAuthMiddleware = require('./middlewares/cookieAuthMiddleware');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'keyboard cat',
resave: true,
saveUninitialized: true,
}));

//Se hace uso de las apis
app.use('/api/productos', apiProductosRouter);
app.use('/api/usuarios', apiUsuariosRouter);

//Se hace uso de las rutas
app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);
app.use('/productos', productosRouter);
app.use('/carrito', carritoRouter);

//Se hace uso de los middlewares a lo largo de toda la app
app.use(logMiddleware);
app.use(cookieAuthMiddleware);

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
