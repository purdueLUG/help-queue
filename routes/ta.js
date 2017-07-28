var express = require('express');
var router = express.Router();

router.get('/:course', function(req, res, next) {
    var course = req.params['course'];
    var password = req.cookies['pass_' + course];

    //if creating queue
    if (queueData[course] == undefined){
        queueData[course] = {
            queue: [],
            password: password
        };
    } else {
        if(queueData[course].password != password){
            res.sendStatus(403);
        }
    }
    res.render('ta', {
        title: 'The ' + course + ' help queue',
        queue: queueData[course].queue
    });

});

module.exports = router;
