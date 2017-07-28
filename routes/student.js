var express = require('express');
var router = express.Router();

function matchName(entry){
    return (this == entry.name);
}

router.get('/:course', function(req, res, next) {
    var course = req.params['course'];

    // 404 if ta hasn't set up queue yet
    if (queueData[course] == undefined){
        next();
    }
    else{
        res.render('student', {
            title: 'The ' + course + ' help queue',
            queue: queueData[course].queue
        });
    }
});

module.exports = router;
