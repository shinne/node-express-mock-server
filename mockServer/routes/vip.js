var readFiles = require("../utils/readFile");
var express = require('express');
var router = express.Router();

/* GET vip page. */
router.get('/client.action', function(req, res, next) {
    var jsonp = req.query.jsonp;
    if(jsonp){
        var file = readFiles.read("mock/vip/client.json");
        res.send(jsonp + "(" + file + ")");
    }
    else{
        readFiles.outFile(res,"mock/vip/client.json")
    }
});

module.exports = router;
