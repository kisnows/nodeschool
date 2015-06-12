var net = require('net');

var port = process.argv[2];
var getTime = function(){
    var date = new Date(),
        year = date.getFullYear(),
        month = formate(date.getMonth()+1),
        day = formate(date.getDate()),
        hour = formate(date.getHours()),
        minute = formate(date.getMinutes());
        // month = date.getMonth().toString().length>1?date.getMonth():"0"+date.getMonth(),
        // day = date.getDate().toString().length>1? date.getDay():"0"+date.getDay();
        // hour = date.getHours().toString().length>1? date.getHours():"0"+date.getHours(),
        // minute = date.getMinutes().toString().length>1?date.getMinutes():"0"+getMinutes();
    var time = year + "-"+month+"-"+day+" "+hour+":"+minute;
    function formate(time){
        return (time.toString().length>1?'':'0')+time;
    }
    return time;
};

var server = net.createServer(function(socket){
    socket.write(getTime()+'\n');
    socket.end();
});
server.listen(port);


/*以下是官方给出的参考答案，以备你做比较参考:

────────────────────────────────
────────────────────────────────

    var net = require('net')

    function zeroFill(i) {
      return (i < 10 ? '0' : '') + i
    }

    function now () {
      var d = new Date()
      return d.getFullYear() + '-'
        + zeroFill(d.getMonth() + 1) + '-'
        + zeroFill(d.getDate()) + ' '
        + zeroFill(d.getHours()) + ':'
        + zeroFill(d.getMinutes())
    }

    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })

    server.listen(Number(process.argv[2]))

────────────────────────────────
────────────────────────────────*/
