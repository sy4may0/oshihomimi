import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import http from 'http';
import debug from 'debug';
import mongoose from 'mongoose';
import cors from 'cors'

import indexRouter from './routes/index';
import userRouter from './routes/user';
import taskRouter from './routes/task'; 
import achievementRouter from './routes/achievement'; 
import excelRouter from './routes/excel'; 

const app = express();
const mongodb_uri = process.env.MONGODB_URI ?
                    process.env.MONGODB_URI :
                    "mongodb://localhost:27017";

mongoose.connect(mongodb_uri + '/oshihomimi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// cors.
if(process.env.CORS_ORIGIN !== undefined) {
  const cors_opts = {
    origin: process.env.CORS_ORIGIN
  };
  app.use(cors(cors_opts));
} else {
  app.use(cors());
}

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/task', taskRouter);
app.use('/achievement', achievementRouter);
app.use('/excel', excelRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  console.log(err);
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// set tcp port.
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// set server.
const server = http.createServer(app);

// start service.
server.listen(port);
server.on('error', onError);
server.on('listening', onListening)

// normalize a port into a number, string or false.
function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

// event listener for http server error.
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

// event listener for http server listening.
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}