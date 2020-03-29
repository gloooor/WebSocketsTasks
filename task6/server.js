const http = require("http");
const fs = require("fs");

const port = 3000;

const server = http.createServer((req, res) => {
  res.end();
});
server.listen(port, err => {
  if (err) {
    return console.log("Something bad happened", err);
  }
  console.log(`Server is listening on ${port}`);
});
