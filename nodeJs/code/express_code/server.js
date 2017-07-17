var express = require('express');
var app = express(); 


app.set('view engine', 'pug');

app.get('/', function (req, res) {
  // res.send('Hello World');
   res.render('aaa', { title: 'Hey',ttt:'sdf \n asdfasdfs', message: 'Hello there!'});
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})