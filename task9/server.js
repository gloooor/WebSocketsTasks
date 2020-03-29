const rpcWSS = require("rpc-websockets").Server;
let server = new rpcWSS({ port: 4000, host: "localhost" });

server
  .register("N1", params => {
    console.log("N1:", params);
  })
  .public();
server
  .register("N2", params => {
    console.log("N2:", params);
  })
  .public();
