var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
	
	
	fs.appendFile('demofile1.html', '<h1>Hello content!</h1>\n', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
	
	
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8087); 