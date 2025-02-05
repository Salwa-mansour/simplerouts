var http = require('http');
var url = require('url');
var fs = require('fs');


http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename =  q.pathname;
    if(filename ==="/"){
      filename ='index'
    }
    filename = filename.includes('.html')? `.${filename}`:`.${filename}.html`;
    try {
      const data = fs.readFileSync(filename, 'utf8');
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    } catch (error) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      data = fs.readFileSync('404.html', 'utf8');
      res.write(data);
      return res.end();
    }
  }).listen(8080); 
  