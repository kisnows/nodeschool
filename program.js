var http = require('http');
var urls = process.argv.slice(2,process.argv.length);
var datas = [];
var end = [];
var is = false;
urls.forEach(function(url,index){
    http.get(url,function(response){
        var list = [];
        response.setEncoding('utf8');
        response.on("data",function(data){
            list.push(data);
        });
        response.on("error",function(err){
            throw err;
        });
        response.on("end",function(){
            var str = '';
            list.forEach(function(s){
                str += s;
            });
            datas[index] = str;
            end.push(true);
            if (isEnd()) {
                for (var i = 0; i < datas.length; i++) {
                    console.log(datas[i]);
                }
            }
        });
    });

});
function isEnd(){
    if (end.length === urls.length) {
        end.forEach(function(blo){
            if(blo){
                is = true;
            }else{
                is = false;
            }
        });
    }
    return is;
}



/*以下是官方给出的参考答案，以备你做比较参考:

───────────────────────────────
───────────────────────────────

    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0

    function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i])
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(err)

          results[index] = data.toString()
          count++

          if (count == 3)
            printResults()
        }))
      })
    }

    for (var i = 0; i < 3; i++)
      httpGet(i)

───────────────────────────────
───────────────────────────────*/
