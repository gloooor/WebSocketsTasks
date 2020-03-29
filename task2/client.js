const WebSocket = require("ws");

let parm2 = process.argv[2];

let prfx = typeof parm2 == "undefined" ? "A" : parm2;
const ws = new WebSocket("ws://localhost:4000/ws");

ws.on("open", () => {
  let k = 0;
  let interval = setInterval(() => {
    ws.send(`client: ${prfx}-${++k}`);
  }, 3000);

  ws.on("message", e => {
    let message = JSON.parse(e);
    console.log(`Received message => ${message.index}`);
  });

  setTimeout(() => {
    ws.send("Exit");
    ws.close();
    clearInterval(interval);
  }, 30000);
});

ws.on("error", error => {
  console.log(error.message);
});
