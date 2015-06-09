var http = require('http'),
    url = require('url');

var port = process.argv[2];

var parseTime = function(time){
    return{
        "hour": time.getHours(),
        "minute": time.getMinutes(),
        "second": time.getSeconds()
    };
};
var getUnixTime = function(time){
    return{
        "unixtime": time.getTime()
    };
};

var server = http.createServer(function(req,res){
    // console.log(url.parse(req.url,true));
    var queryString = url.parse(req.url,true).query,
        time = new Date(queryString.iso),
        pathname = url.parse(req.url,true).pathname,
        result;
    if (req.method != "GET") {
        res.end('Method must be GET');
    }
    if (pathname === '/api/parsetime') {
        result  = parseTime(time);
    }else if(pathname ===  '/api/unixtime'){
        result = getUnixTime(time);
    }

    if (result) {
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result));
    }else{
        res.writeHead(404);
        res.end('404,not found');
    }
});

server.listen(Number(port));


/*────────────────────────────────────
────────────────────────────────────

    var http = require('http')
    var url = require('url')

    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }

    function unixtime (time) {
      return { unixtime : time.getTime() }
    }

    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result

      if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
      else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)

      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))

────────────────────────────────────
────────────────────────────────────*/
