//modules for node and express
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

//modules for authentication
let session=require('express-session');
let passport=require('passport');
let passportLocal=require('passport-local');
let localStrategy=passportLocal.Strategy;
let flash=require('connect-flash');

//database setup
let mongoose=require('mongoose');
let DB=require('./db');

//point monngoose to DB URI
mongoose.connect(DB.URI);

let mongoDB=mongoose.connection;
mongoDB.on('error', console.error.bind(console,'connection error...'));
mongoDB.once('open', ()=>{
  console.log('Mongo connected....');
});

//setup expression-session
app.use(session({
  secret:'SomeSecret',
  saveUninitialized:false,
  resave:false
}));

//intialize flash
app.use(flash());

//intialize passport
app.use(passport.initialize());
app.use(passport.session());

//passport user configuration

//create a user model

//implement a user authentication strategy

//serialize and deserialize the user info

let indexRouter = require('../routes/index');
let contcatRouter=require('../routes/contact');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));


app.use('/', indexRouter);
app.use('/contact-list', contcatRouter);

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
