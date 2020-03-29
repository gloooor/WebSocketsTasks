const rpcWSC = (WebSocket = require("rpc-websockets").Client);
const ws = new rpcWSC("ws://localhost:4000");
const params = [4, 1, 6, 3, 4];
//первый элемент задает количество переметров
ws.on("open", () => {
  ws.call("sum", params).then(r => {
    console.log("sum = ", r);
  });
  ws.call("mul", params).then(r => {
    console.log("mul = ", r);
  });
  ws.login({ login: "glorichka", password: "oroginalParol" }).then(login => {
    if (login) {
      ws.call("conc", params).then(r => {
        console.log(`conc = "${r}"`);
      });
    }
  });
});
ws.on("error", e => {
  console.log("error =  ", e);
});
