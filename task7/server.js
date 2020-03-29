const rpcWSS = require("rpc-websockets").Server;
let server = new rpcWSS({ port: 4000, host: "localhost" });

server.setAuth(l => {
  return l.login == "glorichka" && l.password == "oroginalParol";
});

server
  .register("sum", params => {
    let sum = 0;
    for (let i = 1; i <= params[0]; i++) {
      sum += params[i];
    }
    return sum;
  })
  .public();
server
  .register("mul", params => {
    let mul = 1;
    for (let i = 1; i <= params[0]; i++) {
      mul *= params[i];
    }
    return mul;
  })
  .public();
server
  .register("conc", params => {
    let str = "";
    for (let i = 1; i <= params[0]; i++) {
      str += String(params[i]);
    }
    return str;
  })
  .protected();
