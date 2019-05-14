
1) current strategy WIP 
[IEX](https://iexcloud.io/docs/api/) data comes through Server Sent Events (IEXserver) 
--> when new data comes, `evtServer.on(message)` - sent it through the websocket server that's talking to the client? 
--> if using SSE, do you have to disconnect and reconnect to change the URI (which has the ticker and other filters?)


2) IEX through websockets 
this is a client side example, whereas David is looking for a server-side service that we will talk to from the client.... 

```
const url = 'https://ws-cloud.iexapis.com/stable/deep'
## NB - The requested data is not available to free tier accounts. Please upgrade for access to this data.%                                                       
const socket = require('socket.io-client')(url)

socket.on('connect', () => {
  socket.emit('subscribe', JSON.stringify({
    symbols: ['ziext'],
    channels: ['auction'],
  }))
})
```

3) IEX also has a regular rest API thing, so we could easily do 

```
var CURRENT_TICKER = "AAPL";
var YOUR_TOKEN = "pk_7826e5bc087a470e8ae1d098fa361af9";
var URL =   `https://cloud.iexapis.com/stable/stock/${CURRENT_TICKER}/quote?token=${YOUR_TOKEN}`;

socket.on('newTicker', (msg)=>{
    ticker = msg.ticker;
    axios.get(URL)
        .then(data=>{
            io.emit('newData', data)
        })
})
```

but that seems like it will take longer than this real time stuff and I don't like that.


4) alternate idea: use [Intrino](https://account.intrinio.com/account/overview)'s SDK? and then each message from the client is just a simple call to the already written API instead of changing a URL ... it's pretty easy to use but it seems so easy to use we don't really need our service layer here 

```
var APIKEY = "OjEzNDI0MDg2ZGU4NGI2Yjc2N2ZjYWIzNDYwM2E0MDk3"; 


var intrinioSDK = require('intrinio-sdk');
const util = require('util')
 
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = APIKEY;
 
var companyAPI = new intrinioSDK.CompanyApi()
 
companyAPI.getAllCompanies().then(function(data) {
  console.log(util.inspect(data, false, null, true));
}, function(error) {
  console.error(error);
});--
```