var http = require('http');
var port = process.argv[2];

var server = http.createServer(function(req,res){
    var post = '';
    
    // console.log(req.method);
    if (req.method !== "POST") {
        return res.end("The method must be POST");
    }
    res.writeHead(200,{'content-type':'text/plain'});

    req.on('data',function(data){
        post += data;
    })

    req.on('end',function(){
        res.end(post.toString().toUpperCase());
    })

})

server.listen(port);


/*────────────────────────────────
────────────────────────────────

    var http = require('http')
    var map = require('through2-map')

    var server = http.createServer(function (req, res) {
      if (req.method != 'POST')
        return res.end('send me a POST\n')

      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })

    server.listen(Number(process.argv[2]))

────────────────────────────────
────────────────────────────────*/
