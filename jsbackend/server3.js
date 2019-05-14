var http = require('http');
var fs = require('fs');
let app = require('express')();
let cors = require('cors');
app.use(cors());
var axios = require('axios'); 
var server = http.createServer(app);
server.listen(4000, '0.0.0.0');

var CURRENT_TICKER = "AAPL";
var YOUR_TOKEN = "pk_7826e5bc087a470e8ae1d098fa361af9";
var URL =   `https://cloud.iexapis.com/stable/stock/${CURRENT_TICKER}/quote?token=${YOUR_TOKEN}`;
console.log('Websocket server is running on 4000!\n');
var io = require('socket.io').listen(server);
var connectCount = 0;


io.sockets.on('connection', function(socket){
  console.log('Connection Established')
	connectCount++;


//   socket.on('newTicker', function(msg){
//     console.log('newTicker')
//     currentTicker = msg.ticker; 
//     console.log()
//   })


    socket.on('newData', function (msg) {
        console.log('new data');
        console.log(msg);

    })


})

