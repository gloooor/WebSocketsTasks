const rpcWSS = require("rpc-websockets").Server;
let server = new rpcWSS({ port: 4000, host: "localhost" });
let k = 0;
server.event("AAA");
server.event("BBB");
server.event("CCC");

let AAA = false,
  BBB = false,
  CCC = false;
process.stdin.on("data", data => {
  let start = String(data).substr(0, data.length - 2);
  console.log(data);
  console.log(start);
  if (start === "AAA" && AAA == false) {
    AAA = true;
    setInterval(() => server.emit("AAA", `${++k}AAA`), 2000);
  } else if (start === "BBB" && BBB == false) {
    BBB = true;
    setInterval(() => server.emit("BBB", `${++k}BBB`), 2000);
  } else if (start === "CCC" && CCC == false) {
    CCC = true;
    setInterval(() => server.emit("CCC", `${++k}CCC`), 2000);
  }
});
