'use strict';
const request = require('request');
var stream;


var CURRENT_TICKER = "AAPL";
var YOUR_TOKEN = "pk_7826e5bc087a470e8ae1d098fa361af9";
var URL =   `https://cloud.iexapis.com/stable/stock/${CURRENT_TICKER}/quote?token=${YOUR_TOKEN}`;
function connect() {
    stream = request({
        url: URL,
        headers: {
            'Content-Type': 'text/event-stream'
        }
    })
}
connect();

// CURRENT ERROR 
// The requested data is not available to free tier accounts. Please upgrade for access to this data.%   

stream.on('socket', () => {
    console.log("Connected");
    // console.log(stream)
});

stream.on('end', () => {
    console.log("Reconnecting + end");
    connect();
});

stream.on('complete', () => {
    console.log("Reconnecting + complete");
    connect();
});

stream.on('error', (err) => {
    console.log("Error", err);
    connect();
});

stream.on('data', (response) => {
    var str = response.toString();
    var obj = JSON.parse(str.replace('data:', ''));

    console.log(obj);
});

function wait () {
    setTimeout(wait, 1000);
};

wait();
