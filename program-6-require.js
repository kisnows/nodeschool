var fs = require('fs');
module.exports = function(path,extname,callback){
    fs.readdir(path,function(err,list){
        if(err){
            return callback(err,null);
        }else{
            // newList = [];
            list = list.filter(function(file){
                return file.split('.')[1] === extname
                // if (file.split('.')[1]===extname) {
                //     newList.push(file);
                // }
            })
        }
        callback(null,list);
    })
}


/*solution_filter.js:

    var fs = require('fs')
    var path = require('path')

    module.exports = function (dir, filterStr, callback) {

      fs.readdir(dir, function (err, list) {
        if (err)
          return callback(err)

        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })

        callback(null, list)
      })
    }*/
