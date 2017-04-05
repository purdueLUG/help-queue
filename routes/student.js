var express = require('express');
var router = express.Router();

router.get('/:course', function(req, res, next) {
    var course = req.params['course'];
    if (studentQueue[course] == undefined){
        studentQueue[course] = [];
    }
    res.render('student', {
        title: 'The ' + course + ' help queue',
        queue: studentQueue[course]
    });
});

module.exports = router;
