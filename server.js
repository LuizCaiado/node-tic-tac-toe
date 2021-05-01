const http = require('http');
const fs = require('fs');
const url = require('url');

var game = [];

http.createServer(function(req,res) {
    var paddr = url.parse(req.url, true);


    if(paddr.pathname === '/turn'){
        MarcarCelula(req,res);
    } else if(paddr.pathname === '/game'){
        getGame(req,res);
    } else if(paddr.pathname === '/reset'){
        ResetGame(res);
    } else {
        fs.readFile('./index.html',function(error,file) {
            if (error)
                return;

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(file, "utf-8"); 
        });
    }

}).listen(8080)