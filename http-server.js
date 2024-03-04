var http = require('http');
var qs = require('querystring');

var server = http.createServer(function(req, res) {
  console.log('url:', req.url);
  console.log('method:', req.method);
  console.log('headers:', req.headers);

  if(req.method.toUpperCase() === 'POST') {
    var postData = '';
    req.on('data', function(data) {
      postData += data;
    });
    req.on('end', function() {
      console.log(qs.parse(postData));
    });
  }

  var ret = {
    name: 'xiaoyu'
  };
  res.end(JSON.stringify(ret));
});
server.listen('localhost:3000');

console.log('localhost:3000');