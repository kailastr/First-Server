const http = require('http'); // this is a package import

const port = 2255; //created a local port number

const todoList = ["Complete Node Bytes", "Play Cricket", "skilled in Football"];

http.createServer((req, res) => {

    const { method, url } = req;

    if (url === "/todos") {
        if (method === "GET") {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(todoList.toString());
        } else if (method === "POST") {
            let body = "";
            req
                .on('error', (err) => {
                    console.error(err);
                })
                .on('data', (chunk) => {
                    body += chunk;
                })
                .on('end', () => {
                    body = JSON.parse(body); //converting the body of chunk to a JSON type
                    console.log("data : ", body);
                })
        } else {
            res.writeHead(501);
        }
    } else {
        res.writeHead(401);
    }

    res.end();
}).listen(port, () => { //callback function
    console.log(`Nodejs server started on port ${port}`);
});

//http://localhost:2255
//to start the server we should have to write "node server.js" in the terminal everytime we run this server. Instead we could do it in the JSON file's script section and type npm start