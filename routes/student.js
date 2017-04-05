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

module.exports = router;
