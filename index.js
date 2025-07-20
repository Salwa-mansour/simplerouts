// var http = require('http');
var url = require('url');
var fs = require('fs');


// http.createServer(function (req, res) {
//     var q = url.parse(req.url, true);
//     var filename =  q.pathname;
//     if(filename ==="/"){
//       filename ='index'
//     }
//     filename = filename.includes('.html')? `.${filename}`:`.${filename}.html`;
//     try {
//       const data = fs.readFileSync(filename, 'utf8');
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       return res.end();
//     } catch (error) {
//       res.writeHead(404, {'Content-Type': 'text/html'});
//       data = fs.readFileSync('404.html', 'utf8');
//       res.write(data);
//       return res.end();
//     }
//   }).listen(8080); 


  const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
