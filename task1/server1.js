const http = require("http");
const fs = require("fs");
const WebSocket = require("ws");

const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
    res.end(fs.readFileSync("index1.html"));
  } else {
    res.end("Invalid method");
  }
});

server.listen(port, err => {
  if (err) {
    return console.log("Something bad happened", err);
  }
  console.log(`Server is listening on http://localhost:${port}/`);
});
