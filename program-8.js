var http = require('http');
var url = process.argv[2];

http.get(url,function(response){
    var list = [];
    // response.setEncoding('utf8');
    response.on("data",function(data){
        list.push(data.toString());
    });
    response.on("error",function(err){
        throw err;
    });
    response.on("end",function(){
        var str = '';
        list.forEach(function(s){
            str += s;
        });
        console.log(str.length);
        console.log(str);
    });
});


/*以下是官方给出的参考答案，以备你做比较参考:

──────────────────────────────
──────────────────────────────

    var http = require('http')
    var bl = require('bl')

    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })

──────────────────────────────
──────────────────────────────*/
