const WebSocket = require("ws");

const wsServer = new WebSocket.Server({
  port: 4000,
  host: "localhost",
  path: "/ws"
});

wsServer.on("connection", ws => {
  ws.on("message", message => {
    const clientMessage = JSON.parse(message);

    wsServer.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(
          JSON.stringify({
            x: clientMessage.x,
            y: clientMessage.y,
            z: clientMessage.x + clientMessage.y
          })
        );
      }
    });
  });
});
wsServer.on("error", e => {
  console.log("error", e);
});
