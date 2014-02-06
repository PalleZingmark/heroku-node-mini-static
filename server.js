var express = require('express');
var app = express();

// serve index.html if root
app.get('/', function(req, res) {
    res.sendfile(__dirname + '/public/index.html');
});

// serve static files from public directory
app.use(express.static(__dirname + '/public'));

// start
var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});

