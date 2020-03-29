const WebSocket = require("ws");

const ws = new WebSocket("ws://localhost:4000/ws");
const duplex = WebSocket.createWebSocketStream(ws, { encoding: "utf8" });

duplex.pipe(process.stdout);
process.stdin.pipe(duplex);

// pipe()--ф-я, которая передает информацию из одного потока в другой
// process.stdin — возвращает поток, подключённый к stdin.
// process.stdout — возвращает поток, подключённый к stdout.
// сообщение от сервера приходит в потоке в duplex и pipe() перенаправляет
// сообщение в поток вывода process.stdout
// аналогично поступаем и в следующей строке, где
// сообщения из потока ввода stdin передается в поток duplex,
// тем самым передавая сообщение серверу
