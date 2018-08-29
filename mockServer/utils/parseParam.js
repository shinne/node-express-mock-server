var parseParam = {
    parse:function(str){
        var array = []
        if(str){
            array = str.split("&");
        }
        if(array.length){
            var parseJson = {};
            for(var i in array){
                var keyValue = array[i].split("=");
                if(keyValue.length > 1){
                    if(!parseJson[keyValue[0]]){
                        parseJson[keyValue[0]] = keyValue[1]
                    }
                }
            }
        }
        return parseJson || {}
    }
}

module.exports = parseParam;