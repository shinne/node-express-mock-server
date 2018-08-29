var readFiles = require("../utils/readFile");
var express = require('express');
var router = express.Router();
var readFiles = require("../utils/readFile")

/* GET jsonp page. */
router.get('/ajax', function(req, res, next) {
    readFiles.jsonpFile(res,"mock/jsonp/jsonp.json")
});

module.exports = router;
