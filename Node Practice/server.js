var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    var html = fs.readFileSync(__dirname + '/test.html', 'utf8');
    var message = 'Hello World...';
    html = html.replace('{message}', message);
    res.end(html);
}).listen(1336, '127.0.0.1');

http.createServer(function(req, res){
    if(req.url === '/'){
        fs.createReadStream(__dirname + '/test.html').pipe(res);
    }
    if(req.url === '/api'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var obj = {
            firstname: 'John',
            lastname: 'Doe'
        };
        res.end(JSON.stringify(obj));
    }
}).listen(1338, '127.0.0.1');
