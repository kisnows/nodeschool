var fs = require('fs');
var data = fs.readFile(process.argv[2],function(err,data){
    if(err){
        throw console.error(err);
    }
    var list = data.toString().split('\n');
    console.log(list.length-1);
});
