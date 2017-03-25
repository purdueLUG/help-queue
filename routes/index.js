var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Help Queue',
        queue: studentQueue
    });
    console.log(studentQueue);
});

module.exports = router;
