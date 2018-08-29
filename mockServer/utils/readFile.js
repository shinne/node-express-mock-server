var fs = require('fs');
var path = require('path');

var readFiles = {
    read:function(filename){
        var file = path.join(__dirname, "../" + filename);
        return fs.readFileSync(file,'utf-8');
    },
    outFile: function (res,filename) {
        var file = path.join(__dirname, "../" + filename);
        fs.readFile(file,'utf-8',function (err,data) {
            if(err){
                res.send('文件读取失败')
            }
            else
            {
                res.send(JSON.parse(data))
            }
        })
    },
    jsonpFile: function (res,filename) {
        var file = path.join(__dirname, "../" + filename);
        fs.readFile(file,'utf-8',function (err,data) {
            if(err){
                res.jsonp('文件读取失败')
            }
            else
            {
                res.jsonp(JSON.parse(data))
            }
        })
    },
}

module.exports = readFiles;
