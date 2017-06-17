
require('dotenv').config({silent: true});

const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const errorHandlers = require('./handlers/errorHandlers');

// Routes
const routes = require('./routes/index');

// Middleware
const db = require('./middleware/db');


const app = express();

app.set('etag', true);

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// Object.assign(app.locals, helpers);


app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(db(process.env.DB_POOL_SIZE));


// Routes
app.use('/', routes);


// error handlers

// If that above routes didnt work, forward to 404
app.use(errorHandlers.notFound);

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (app.get('env') === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors);
}

// production error handler
app.use(errorHandlers.productionErrors);



module.exports = app;


console.log('App is running at http://localhost:3000');
