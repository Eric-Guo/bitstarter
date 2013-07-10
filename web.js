var fs = require('fs')
var express = require('express');

var app = express();

app.get('/', function(request, response) {
  response.send(new Buffer(fs.readFileSync('index.html'), "utf-8").toString('utf-8'));
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});