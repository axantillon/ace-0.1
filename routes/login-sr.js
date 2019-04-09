var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    res.redirect('/home/');
    var username = req.body.username;
    var password = req.body.password;
});

module.exports = router;
