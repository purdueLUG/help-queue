var express = require('express');
var router = express.Router();


router.get('/:course', function(req, res, next) {
    var course = req.params['course'];
    if (studentQueue[course] == undefined){
        studentQueue[course] = [];
    }
    res.render('ta', {
        title: 'The ' + course + ' help queue',
        queue: studentQueue[course]
    });
});

// handle eneque requests
router.post('/:course/dequeue', function(req, res) {
    var course = req.params['course'];

    // remove first name from queue
    studentQueue[course].shift();

    res.sendStatus(200);
});

module.exports = router;
