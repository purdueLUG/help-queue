var express = require('express');
var router = express.Router();


router.get('/:className', function(req, res, next) {
    var className = req.params['className'];
    if (studentQueue[className] == undefined){
        studentQueue[className] = [];
    }
    res.render('ta', {
        title: 'The ' + className + ' help queue',
        queue: studentQueue[className]
    });
});

router.post('/:className', function(req, res, next) {
    console.log(req.params);
    res.sendStatus(200);
});

// handle dequeue requests
router.post('/:className/dequeue', function(req, res) {
    var className = req.params['className'];
    studentQueue[className].shift();
    console.log(studentQueue);
    res.sendStatus(200);
});

module.exports = router;
