var express = require('C:/Users/admin/AppData/Roaming/npm/node_modules/express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!2');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});