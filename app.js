var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
const authApi = require('./middleware/authApi');

var mongoose = require ('mongoose');

var app = express();

var jwt = require('jsonwebtoken');
var token = jwt.sign({email: 'paulina@gmail.com'}, 'secretcode');
console.log(token)

// creating database - recipe
mongoose.connect(process.env.DATABASE)
const { connection:db } = mongoose;

// when the connection error, it will display connection error
db.on('error', console.error.bind(console, 'connection error:'));
// when the connection is open, it will connect it to the database
db.once('open', () => {
 console.log('connected to recipe database')
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api*', authApi)
app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
