var express = require('express')
, http = require('http')
, path = require('path');

var app = express();

app.use('/img',express.static(path.join(__dirname, '/public/images')));
app.use('/css',express.static(path.join(__dirname, '/public/css')));
app.use('/js',express.static(path.join(__dirname, '/public/js')));

app.get('/', function (req, res) {
    //console.log(path.join(__dirname, 'public/js'));
    res.sendFile(__dirname + '/main.html');
});

app.get('/getUserName', function (req, res) {
  let userName = process.env['USERPROFILE'].split(path.sep)[2];
  //let loginId = path.join("domainName",userName);
  //console.log(loginId);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(userName);
  res.end();

});

app.listen(3000, function () {
  console.log('App listening on port 3000!')
});
