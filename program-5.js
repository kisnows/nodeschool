var fs = require('fs');
var path = process.argv[2];
var extname = process.argv[3];

fs.readdir(path,function(err,list){
    if(err){
        throw err
    }else{
        list.forEach(function(file){
            if(file.split('.')[1] === extname){
                console.log(file);
            }
        })
    }
})
