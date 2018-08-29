var readFiles = require("../utils/readFile");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
    res.send(JSON.stringify(req.query));
});

module.exports = router;
