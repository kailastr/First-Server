const http = require('http');

const port = 8081;

http.createServer((request, Response) => {
    Response.writeHead(200, { 'Content-Type': 'text/html' });
    Response.write("<h1>Hello, this is from the server</h1>");
    Response.end();

}).listen(port, () => {
    console.log(`Nodejs server started on port ${port}`);
});

//http://localhost:8081
//to start the server we should have to write "node server.js" in the terminal everytime we run this server. Instead we could do it in the JSON file's script section and type npm start