const http = require('http');
const fs = require('fs');
const url = require('url');

var game = [
    ["","","",],
    ["","","",],
    ["","","",]
];
var turno = 0;

function MarcarCelula (req, res){
    let paddr = url.parse(req.url, true);

    let posI = paddr.query.posI;
    let posJ = paddr.query.posJ;


    if(posI === undefined || posJ === undefined){
        res.writeHead(400);
        res.end();
    } else if (game[posI][posJ] != ""){   
        res.writeHead(401);
        res.end("Campo já ocupado");
    } else {
        if (turno == 0){
            game[posI][posJ] = 'X';
            turno = 1;
        } else {
            game[posI][posJ] = 'O';
            turno = 0;
        }

        res.writeHead(200);
        res.end();

    }

}

function GetGame(res) {
    res.writeHead(200);
    res.end(`${game}`);
}

function ResetGame(res){
    game = [
        ["","","",],
        ["","","",],
        ["","","",]
    ];
    res.writeHead(200);
    res.end();
}

http.createServer(function(req,res) {
    var paddr = url.parse(req.url, true);


    if(paddr.pathname === '/turn'){
        MarcarCelula(req,res);
    } else if(paddr.pathname === '/game'){
        GetGame(res);
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