var http = require('http');

http.get(process.argv[2],function(response){
    response.setEncoding('utf8');
    response.on("data",function(data){
        console.log(data);
    });
    response.on("error",function(err){
        throw err;
    });
    response.on("end",function(){
        // console.log(date);
    });
});


/*以下是官方给出的参考答案，以备你做比较参考:

─────────────────────────────
─────────────────────────────

    var http = require('http')

    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    })

─────────────────────────────
─────────────────────────────*/
