var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Lab queue'
    });
});

/*
router.get('/course', function(req, res, next) {
    res.render('course', {
        title: 'Lab queue'
    });
    /*
      console.log(req.params);
      res.render('course', {
      title: 'The ECE 264 Open Lab Queue',
      queue: studentQueue
      });
      res.send(200);
    res.send("Hello, world!");
});
*/

module.exports = router;
