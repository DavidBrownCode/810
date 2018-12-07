var http = require('http');
const url = require('url');


function responseHandler(req, res){
    var queryData = url.parse(req.url, true).query;
    res.writeHead(200, {'Content-Type': 'text/plain'});

    if (queryData.name){
        res.end('Hello ' + queryData.name + '\n');
        console.log(queryData);
    }else{
        res.end("This server doesn't know you.\n");
    }
}
var server = http.createServer(responseHandler);
server.listen(1337);

console.log('Server is running at http://127.0.0.1:1337');
console.log(new Date());