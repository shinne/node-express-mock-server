var express = require('express');
var router = express.Router();
var readFiles = require("../utils/readFile");

/* GET login page. */
router.get('/', function(req, res, next) {
    readFiles.outFile(res,'mock/login/login.json')
});

module.exports = router;
