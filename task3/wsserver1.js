const WebSocket = require("ws");

const wsServer = new WebSocket.Server({
  port: 4000,
  host: "localhost",
  path: "/ws"
});

wsServer.on("connection", ws => {
  let interval = setInterval(() => {
    console.log("server: ping");
    ws.ping("Server: ping");
  }, 5000);

  ws.on("pong", () => {
    console.log("pong");
  });

  ws.on("message", message => {
    console.log(message);

    if (message === "Exit") {
      clearInterval(interval);
      ws.close();
      console.log("Server closed");
    }
    wsServer.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(
          JSON.stringify({
            size: wsServer.clients.size,
            index: message
          })
        );
      }
    });
  });
});
wsServer.on("error", e => {
  console.log("ws server errr", e);
});
