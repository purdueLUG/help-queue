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

// handle eneque requests
router.post('/:course/enqueue', function(req, res) {
    // get current time as string
    var date = new Date();
    var timeStamp = date.toLocaleString();

    var name = req.body['name'];
    var course = req.body['course'];
    var entry = {
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
    res.sendStatus(200);
});

module.exports = router;
