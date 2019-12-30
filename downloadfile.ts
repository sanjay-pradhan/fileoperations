var http = require('http');
var fileStruct = require('fs');

http.createServer(function (req, res) {
  var files = fileStruct.createReadStream("package.json");
  res.writeHead(200, {'Content-disposition': 'attachment; filename=downloadedFile"}'}); //here you can specify file name
  files.pipe(res);
}).listen(8080); 

//give the file path which u wanna download in createReadStream function