const http = require('http'); // this is a package import

const port = 2255; //created a local port number

http.createServer((request, Response) => {
    Response.writeHead(200, { 'Content-Type': 'text/html' });
    Response.write("<h1>Hello, this is from My first server</h1>");
    Response.write("<p>Hey user How is your experience in this server ??");
    Response.end();

}).listen(port, () => { //callback function
    console.log(`Nodejs server started on port ${port}`);
});

//http://localhost:2255
//to start the server we should have to write "node server.js" in the terminal everytime we run this server. Instead we could do it in the JSON file's script section and type npm start