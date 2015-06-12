var mymodule = require('./program-6-require');
var path = process.argv[2];
var extname = process.argv[3];

mymodule(path,extname,function(err,files){
    if(err){
        return console.log(err);
    }
    files.forEach(function(file){
        console.log(file);
    });
});


/*solution.js:

    var filterFn = require('./solution_filter.js')
    var dir = process.argv[2]
    var filterStr = process.argv[3]

    filterFn(dir, filterStr, function (err, list) {
      if (err)
        return console.error('There was an error:', err)

      list.forEach(function (file) {
        console.log(file)
      })
    })*/
