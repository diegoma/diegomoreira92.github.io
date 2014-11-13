var http = require('http');
var arquivo = require('fs');

var server = http.createServer(function (req, res) {
                arquivo.readFile('./index.html', function(err, html){
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    if(err) res.write('404');
                    res.write(html);
                    res.end();
                });   
             });

server.listen(8080, function(){
    console.log('Run server localhost:8080');
});