var fs = require('fs'),
    http = require('http');

var port = process.argv[2],
    path = process.argv[3];

var fileStream = fs.createReadStream(path);

var server = http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'});
    fileStream.pipe(res);
});

server.listen(port);



/*──────────────────────────────
──────────────────────────────

    var http = require('http')
    var fs = require('fs')

    var server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })

      fs.createReadStream(process.argv[3]).pipe(res)
    })

    server.listen(Number(process.argv[2]))

──────────────────────────────
──────────────────────────────*/
