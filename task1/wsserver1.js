const WebSocket = require("ws");

const wsServer = new WebSocket.Server({
  port: 4000,
  host: "localhost",
  path: "/ws"
});

wsServer.on("connection", ws => {
  ws.on("message", message => {
    wsServer.clients.forEach(client => {
      client.send(message);
    });
  });
  setInterval(() => {
    ws.send("I SEVER");
  }, 3000);
});
wsServer.on("error", e => {
  console.log("ws server errr", e);
});
