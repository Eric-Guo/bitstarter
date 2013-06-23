var express = require('express');

var app = express();

app.get('/', function(request, response) {
  response.send('Hello World from express!');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});