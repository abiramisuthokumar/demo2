var http = require('http');
var dt = require('./mathcal');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var q = url.parse(req.url,true).query;
    fs.readFile('demofle.html', function(err, data) {
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end();
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.write(q.year + " "+ q.month);
        res.write("The date and time are currently: " + dt.myDateTime());
        return res.end();
    })
    // res.write(req.url);
    
}).listen(8080);
