var express = require('express');
var router = express.Router();


router.get('/:className', function(req, res, next) {
    var className = req.params['className'];
    if (studentQueue[className] == undefined){
        studentQueue[className] = [];
    }
    res.render('course', {
        title: 'The ' + className + ' help queue',
        queue: studentQueue[className]
    });
});

module.exports = router;
