const rpcWSC = (WebSocket = require("rpc-websockets").Client);
let ws = new rpcWSC("ws://localhost:4000");

let k = 0;
ws.on("open", () => {
  let interval = setInterval(
    () => ws.notify("N2", { n: ++k, name: "N2" }),
    500
  );
  setTimeout(() => {
    clearInterval(interval);
    ws.close();
  }, 10000);
});
