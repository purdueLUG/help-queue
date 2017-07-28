var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var autobahn = require('autobahn');

// routes
var index = require('./routes/index');
var student = require('./routes/student');
var ta = require('./routes/ta');

var app = express();
queueData = {};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/student', student);
app.use('/ta', ta);
//app.use('/users', users);

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

// autobahn stuff
function matchName(entry){
    return(this == entry.name);
}
var connection = new autobahn.Connection({
    url: 'ws://127.0.0.1:9000',
    realm: 'realm1'
});

connection.onopen = function (session) {
    console.log("connected to WAMP router");

    session.subscribe('com.help-queue.enqueue', function (args) {
        var course = args[0];
        var name = args[1];
        var timeStamp = Date().toLocaleString();
        //queueData[course].append(name);
        entry = {
            name: name,
            timeStamp: timeStamp
        };

        // ensure that queue exists
        if(queueData[course] != undefined){
            // enqueue student only if he's not in the queue already
            if(queueData[course].queue.find(matchName, name) == undefined){
                queueData[course].queue.push(entry);
            }
        }
    });

    session.subscribe('com.help-queue.dequeue', function (args) {
        var course = args[0];

        // ensure that queue exists
        if(queueData[course] != undefined){
            queueData[course].queue.shift();
        }
    });
};

connection.onclose = function (reason, details) {
    console.log("WAMP connection closed", reason, details);
};

connection.open();

module.exports = app;
