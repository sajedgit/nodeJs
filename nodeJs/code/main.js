var http = require('http');
var url = require('url');
const util = require('util');
var dt = require('./myfirstmodule');
var testModule = require('./sajedTest/test');


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime()+"sdf---  "+dt.name+"sum==  "+dt.sum(10,20)+"---request url =="+req.url+"----");
	testModule.myAge();
	var q = url.parse(req.url, true).query;
	var txt = q.year + " " + q.month;

	//var output =  JSON.stringify(req);
 
	//alert(output);
	
    res.end("<br/>"+txt);
	
}).listen(8087);

 