var http = require('http');
// var bl = require('bl');
var url = process.argv[2];

http.get(url,function(response){
    var list = [];
    // response.setEncoding('utf8');
    response.on("data",function(data){
        list.push(data.toString());
    })
    response.on("error",function(err){
        throw err
    })
    response.on("end",function(){
        var str = '';
        list.forEach(function(s){
            str += s;
        })
        console.log(str.length);
        console.log(str);
    })
})
