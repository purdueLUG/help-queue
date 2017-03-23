var express = require('express');
var router = express.Router();

var studentQueue = [];

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'The ECE 264 Open Lab Queue',
        queue: studentQueue
    });
});

// handle eneque requests
router.post('/enqueue', function(req, res) {
    // enqueue student only if he's not in the queue already
    if(studentQueue.indexOf(req.body['name']) < 0){
        studentQueue.push(req.body['name']);
    }
    console.log(studentQueue);
    res.send(200);
});

// handle dequeue requests
router.post('/dequeue', function(req, res) {
    studentQueue.shift();
    console.log(studentQueue);
    res.send(200);
});

module.exports = router;
