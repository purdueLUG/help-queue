var express = require('express');
var router = express.Router();

router.get('/:course', function(req, res, next) {
    var course = req.params['course'];

    // 404 if ta hasn't set up queue yet
    if (studentQueue[course] == undefined){
        next();
    }
    else{
        res.render('student', {
            title: 'The ' + course + ' help queue',
            queue: studentQueue[course]
        });
    }
});

// handle eneque requests
router.post('/:course/enqueue', function(req, res) {
    var course = req.params['course'];
    console.log(course);
    // enqueue student only if he's not in the queue already
    if(studentQueue[course].indexOf(req.body['name']) < 0){
        studentQueue[course].push(req.body['name']);
    }
    console.log(studentQueue[course]);
    res.sendStatus(200);
});

module.exports = router;
